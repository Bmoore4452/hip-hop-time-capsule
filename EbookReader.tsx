import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import PageRenderer from "./components/PageRenderer";
import NavigationControls from "./components/NavigationControls";
import NavigationHint from "./components/NavigationHint";
import InvisibleNavZones from "./components/InvisibleNavZones";

export default function EbookReader() {
    const [currentPage, setCurrentPage] = useState(1);
    const [showNavControls, setShowNavControls] = useState(false); // Start hidden
    const [showNavigationHint, setShowNavigationHint] = useState(true);
    const [hideControlsTimer, setHideControlsTimer] = useState<NodeJS.Timeout | null>(null);
    const [triviaGameState, setTriviaGameState] = useState<string>('splash');
    const totalPages = 285;

    const isTriviaPage = currentPage >= 81 && currentPage <= 90;
    const isTriviaPlaying = isTriviaPage && triviaGameState !== 'splash';
    const isQuestionPage = currentPage >= 25 && currentPage <= 75;

    // Auto-hide navigation controls after 3 seconds
    const scheduleHideControls = () => {
        if (hideControlsTimer) {
            clearTimeout(hideControlsTimer);
        }
        const timer = setTimeout(() => {
            setShowNavControls(false);
        }, 3000);
        setHideControlsTimer(timer);
    };

    // Show controls and schedule auto-hide
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

    const goToNextPage = () => {
        // Skip trivia pages when navigating forward from splash
        if (isTriviaPage && triviaGameState === 'splash') {
            setCurrentPage(91);
            showControlsTemporary();
            return;
        }
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            showControlsTemporary(); // Show controls briefly on navigation
        }
    };

    const goToPreviousPage = () => {
        // Skip trivia pages when navigating backward from splash
        if (isTriviaPage && triviaGameState === 'splash') {
            setCurrentPage(80);
            showControlsTemporary();
            return;
        }
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            showControlsTemporary(); // Show controls briefly on navigation
        }
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleSwipeGesture = (event: any) => {
        const { translationX, state } = event.nativeEvent;

        if (state === State.END) {
            const swipeThreshold = 50;

            if (translationX > swipeThreshold) {
                // Swipe right - go to previous page
                goToPreviousPage();
            } else if (translationX < -swipeThreshold) {
                // Swipe left - go to next page
                goToNextPage();
            }
        }
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <PanGestureHandler onGestureEvent={handleSwipeGesture}>
                <View style={styles.container}>
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
                        disableCenterZone={isQuestionPage || isTriviaPage}
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
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
