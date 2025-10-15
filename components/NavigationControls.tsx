import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface NavigationControlsProps {
    currentPage: number;
    totalPages: number;
    onNextPage: () => void;
    onPreviousPage: () => void;
    onPageChange: (pageNumber: number) => void;
    visible?: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
    currentPage,
    totalPages,
    onNextPage,
    onPreviousPage,
    onPageChange,
    visible = true,
}) => {
    const [fadeAnim] = useState(new Animated.Value(visible ? 1 : 0));

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible, fadeAnim]);

    const canGoBack = currentPage > 1;
    const canGoForward = currentPage < totalPages;

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            {/* Previous Button */}
            <TouchableOpacity
                style={[styles.navButton, styles.previousButton, !canGoBack && styles.disabledButton]}
                onPress={onPreviousPage}
                disabled={!canGoBack}
                activeOpacity={0.7}
            >
                <Text style={[styles.navButtonText, !canGoBack && styles.disabledText]}>‹</Text>
            </TouchableOpacity>

            {/* Page Indicator */}
            <View style={styles.pageIndicator}>
                <TouchableOpacity
                    style={styles.pageNumberContainer}
                    onPress={() => {
                        // This could trigger a page selector modal
                        // For now, we'll just show the page info
                    }}
                    activeOpacity={0.7}
                >
                    <Text style={styles.pageText}>
                        {currentPage} of {totalPages}
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Next Button */}
            <TouchableOpacity
                style={[styles.navButton, styles.nextButton, !canGoForward && styles.disabledButton]}
                onPress={onNextPage}
                disabled={!canGoForward}
                activeOpacity={0.7}
            >
                <Text style={[styles.navButtonText, !canGoForward && styles.disabledText]}>›</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: moderateScale(40),
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
        zIndex: 1000,
    },
    navButton: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        backgroundColor: 'rgba(79, 23, 213, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
    },
    previousButton: {
        marginRight: moderateScale(10),
    },
    nextButton: {
        marginLeft: moderateScale(10),
    },
    disabledButton: {
        backgroundColor: 'rgba(221, 221, 221, 0.8)',
        shadowOpacity: 0.05,
        elevation: 1,
    },
    navButtonText: {
        fontSize: scaleFont(20),
        fontWeight: 'bold',
        color: colors.background,
    },
    disabledText: {
        color: '#999',
    },
    pageIndicator: {
        flex: 1,
        alignItems: 'center',
    },
    pageNumberContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(8),
        borderRadius: moderateScale(16),
        borderWidth: 1,
        borderColor: 'rgba(210, 56, 187, 0.6)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    pageText: {
        fontSize: scaleFont(14),
        fontWeight: '600',
        color: colors.primary,
        textAlign: 'center',
    },
});

export default NavigationControls;