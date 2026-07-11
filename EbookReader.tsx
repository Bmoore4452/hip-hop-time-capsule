import React, { useState, useEffect, useRef } from "react";
import {
    View,
    StyleSheet,
    PanResponder,
    Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PageRenderer from "./components/PageRenderer";
import NavigationControls from "./components/NavigationControls";
import NavigationHint from "./components/NavigationHint";
import InvisibleNavZones from "./components/InvisibleNavZones";
import { loadProgress, saveProgress } from "./lib/userData";

// On web, allow deep-linking straight to a page with ?page=N (also handy for
// visual regression screenshots).
function getInitialPage(): number {
    if (Platform.OS === "web" && typeof window !== "undefined") {
        const p = parseInt(new URLSearchParams(window.location.search).get("page") ?? "", 10);
        if (!isNaN(p) && p >= 1 && p <= 287) return p;
    }
    return 1;
}

export default function EbookReader() {
    const [currentPage, setCurrentPage] = useState(getInitialPage);
    const [showNavControls, setShowNavControls] = useState(false);
    // Skip the first-time hint when deep-linked straight to a page.
    const [showNavigationHint, setShowNavigationHint] = useState(() => getInitialPage() === 1);
    const [hideControlsTimer, setHideControlsTimer] = useState<NodeJS.Timeout | null>(null);
    const [triviaGameState, setTriviaGameState] = useState<string>('splash');
    const totalPages = 287;

    const isTriviaPage = currentPage >= 81 && currentPage <= 90;
    const isTriviaPlaying = isTriviaPage && triviaGameState !== 'splash';
    const isQuestionPage = currentPage >= 25 && currentPage <= 75;
    const isScrollablePage =
        (currentPage >= 93 && currentPage <= 142) ||  // DJ Scipio answers
        (currentPage >= 145 && currentPage <= 211) || // Anita Scipio answers
        currentPage >= 213;                            // Concert + back-matter content pages (scroll / tappable QR codes)
    // Front-matter pages with tappable QR codes: the center tap zone would
    // swallow QR taps, so it is disabled there (top/bottom zones still toggle nav).
    const isQRPage = currentPage === 8 || currentPage === 18;

    const scheduleHideControls = () => {
        if (hideControlsTimer) {
            clearTimeout(hideControlsTimer);
        }
        const timer = setTimeout(() => {
            setShowNavControls(false);
        }, 3000);
        setHideControlsTimer(timer);
    };

    const showControlsTemporary = () => {
        setShowNavControls(true);
        scheduleHideControls();
    };

    const toggleControls = () => {
        if (showNavControls) {
            setShowNavControls(false);
            if (hideControlsTimer) {
                clearTimeout(hideControlsTimer);
            }
        } else {
            showControlsTemporary();
        }
    };

    useEffect(() => {
        return () => {
            if (hideControlsTimer) {
                clearTimeout(hideControlsTimer);
            }
        };
    }, [hideControlsTimer]);

    // Resume where the signed-in reader left off (skipped when deep-linked to
    // a page, or if they have already started navigating).
    useEffect(() => {
        if (getInitialPage() !== 1) return;
        loadProgress().then((page) => {
            if (page && page > 1 && page <= totalPages) {
                setCurrentPage(prev => (prev === 1 ? page : prev));
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Persist reading progress (debounced; no-op when signed out).
    useEffect(() => {
        const timer = setTimeout(() => saveProgress(currentPage), 1000);
        return () => clearTimeout(timer);
    }, [currentPage]);

    const goToNextPage = () => {
        if (isTriviaPage && triviaGameState === 'splash') {
            setCurrentPage(91);
            showControlsTemporary();
            return;
        }
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            showControlsTemporary();
        }
    };

    const goToPreviousPage = () => {
        if (isTriviaPage && triviaGameState === 'splash') {
            setCurrentPage(80);
            showControlsTemporary();
            return;
        }
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            showControlsTemporary();
        }
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    // Keep refs current so the PanResponder (created once) always calls the latest functions
    const goToNextPageRef = useRef(goToNextPage);
    const goToPreviousPageRef = useRef(goToPreviousPage);
    goToNextPageRef.current = goToNextPage;
    goToPreviousPageRef.current = goToPreviousPage;

    const panResponder = useRef(
        PanResponder.create({
            // Only claim the gesture after movement begins and it is clearly horizontal
            onMoveShouldSetPanResponder: (_, gestureState) =>
                Math.abs(gestureState.dx) > Math.abs(gestureState.dy) &&
                Math.abs(gestureState.dx) > 10,
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx > 50) {
                    goToPreviousPageRef.current();
                } else if (gestureState.dx < -50) {
                    goToNextPageRef.current();
                }
            },
        })
    ).current;

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.container} {...panResponder.panHandlers}>
                <PageRenderer
                    pageNumber={currentPage}
                    onNavigateNext={goToNextPage}
                    onNavigatePrevious={goToPreviousPage}
                    onGoToPage={handlePageChange}
                    onShowNavigation={showControlsTemporary}
                    onTriviaStateChange={setTriviaGameState}
                />

                <InvisibleNavZones
                    onNextPage={goToNextPage}
                    onPreviousPage={goToPreviousPage}
                    onToggleControls={toggleControls}
                    disableCenterZone={isQuestionPage || isTriviaPage || isScrollablePage || isQRPage}
                    disabled={isTriviaPlaying}
                />

                <NavigationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNextPage={goToNextPage}
                    onPreviousPage={goToPreviousPage}
                    onPageChange={handlePageChange}
                    visible={showNavControls}
                />

                <NavigationHint
                    visible={showNavigationHint}
                    onHide={() => setShowNavigationHint(false)}
                />

                <StatusBar style="auto" />
            </View>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
