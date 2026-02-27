import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Modal, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
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
    const [showJumpModal, setShowJumpModal] = useState(false);
    const [jumpPageInput, setJumpPageInput] = useState('');
    const inputRef = useRef<TextInput>(null);

    // Focus and select text when modal opens
    useEffect(() => {
        if (showJumpModal) {
            const timer = setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showJumpModal]);

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: visible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [visible, fadeAnim]);

    const canGoBack = currentPage > 1;
    const canGoForward = currentPage < totalPages;

    const handleOpenJumpModal = () => {
        setJumpPageInput(String(currentPage));
        setShowJumpModal(true);
    };

    const handleJumpToPage = () => {
        const pageNum = parseInt(jumpPageInput, 10);
        if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= totalPages) {
            onPageChange(pageNum);
        }
        setShowJumpModal(false);
        setJumpPageInput('');
    };

    const handleCancelJump = () => {
        setShowJumpModal(false);
        setJumpPageInput('');
    };

    return (
        <>
            <Animated.View style={[styles.container, { opacity: fadeAnim }]} pointerEvents={visible ? 'auto' : 'none'}>
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
                        onPress={handleOpenJumpModal}
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

            {/* Jump to Page Modal */}
            <Modal
                visible={showJumpModal}
                transparent={true}
                animationType="fade"
                onRequestClose={handleCancelJump}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.modalOverlay}
                >
                    <TouchableOpacity
                        style={styles.modalOverlay}
                        activeOpacity={1}
                        onPress={handleCancelJump}
                    >
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={(e) => e.stopPropagation()}
                            style={styles.modalContainer}
                        >
                            <Text style={styles.modalTitle}>Jump to Page</Text>
                            <TextInput
                                ref={inputRef}
                                style={styles.modalInput}
                                value={jumpPageInput}
                                onChangeText={setJumpPageInput}
                                keyboardType="number-pad"
                                autoFocus={true}
                                selectTextOnFocus={true}
                                placeholder={`1 - ${totalPages}`}
                                placeholderTextColor="#999"
                            />
                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.cancelButton]}
                                    onPress={handleCancelJump}
                                >
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.goButton]}
                                    onPress={handleJumpToPage}
                                >
                                    <Text style={styles.goButtonText}>Go</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </Modal>
        </>
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
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: moderateScale(16),
        padding: moderateScale(24),
        width: '80%',
        maxWidth: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
    },
    modalTitle: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: moderateScale(16),
    },
    modalInput: {
        width: '100%',
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: moderateScale(10),
        padding: moderateScale(12),
        fontSize: scaleFont(18),
        textAlign: 'center',
        marginBottom: moderateScale(20),
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        paddingVertical: moderateScale(12),
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(5),
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#eee',
    },
    cancelButtonText: {
        color: '#666',
        fontSize: scaleFont(16),
        fontWeight: '600',
    },
    goButton: {
        backgroundColor: colors.primary,
    },
    goButtonText: {
        color: '#fff',
        fontSize: scaleFont(16),
        fontWeight: '600',
    },
});

export default NavigationControls;