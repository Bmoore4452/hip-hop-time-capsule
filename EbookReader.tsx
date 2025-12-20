import React, { useState, useEffect } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import PageRenderer from "./components/PageRenderer";
import PageFooter from "./components/PageFooter";
import NavigationControls from "./components/NavigationControls";
import NavigationHint from "./components/NavigationHint";
import InvisibleNavZones from "./components/InvisibleNavZones";

const { width } = Dimensions.get("window");

interface EbookReaderProps {
    onBackToHome?: () => void;
}

export default function EbookReader({ onBackToHome }: EbookReaderProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [showNavControls, setShowNavControls] = useState(false); // Start hidden
    const [showNavigationHint, setShowNavigationHint] = useState(true);
    const [hideControlsTimer, setHideControlsTimer] = useState<NodeJS.Timeout | null>(null);
    const totalPages = 285;

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
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            showControlsTemporary(); // Show controls briefly on navigation
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            showControlsTemporary(); // Show controls briefly on navigation
        }
    };

    const handlePageTap = (event: any) => {
        // This is now handled by InvisibleNavZones, but kept for compatibility
        const { locationX } = event.nativeEvent;
        const quarterWidth = width * 0.25;

        if (locationX < quarterWidth) {
            goToPreviousPage();
        } else if (locationX > (width - quarterWidth)) {
            goToNextPage();
        } else {
            toggleControls();
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
                    {/* Back to Home Button */}
                    {onBackToHome && currentPage === 1 && (
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={onBackToHome}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.backButtonText}>← Home</Text>
                        </TouchableOpacity>
                    )}

                    <PageRenderer
                        pageNumber={currentPage}
                        onNavigateNext={goToNextPage}
                        onNavigatePrevious={goToPreviousPage}
                    />

                    {/* Invisible navigation zones - center zone disabled on pages with interactive inputs */}
                    <InvisibleNavZones
                        onNextPage={goToNextPage}
                        onPreviousPage={goToPreviousPage}
                        onToggleControls={toggleControls}
                        disableCenterZone={currentPage === 24 || currentPage === 25 || currentPage === 26 || currentPage === 27}
                    />

                    <NavigationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onNextPage={goToNextPage}
                        onPreviousPage={goToPreviousPage}
                        onPageChange={handlePageChange}
                        visible={showNavControls}
                    />

                    <PageFooter
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
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
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
