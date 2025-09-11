import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';
import { scaleFont, moderateScale } from '../utils/responsive';

interface PageFooterProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (pageNumber: number) => void;
}

const PageFooter: React.FC<PageFooterProps> = ({ currentPage, totalPages, onPageChange }) => {
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const handlePageNumberPress = () => {
        setShowInput(true);
        setInputValue(currentPage.toString());
    };

    const handleInputSubmit = () => {
        const pageNumber = parseInt(inputValue);
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber);
            setShowInput(false);
        } else {
            Alert.alert('Invalid Page', `Please enter a page number between 1 and ${totalPages}`);
        }
    };

    const handleInputCancel = () => {
        setShowInput(false);
        setInputValue('');
    };

    return (
        <>
            <View style={styles.footer}>
                <TouchableOpacity onPress={handlePageNumberPress}>
                    <Text style={styles.pageNumber}>{currentPage}</Text>
                </TouchableOpacity>
            </View>

            <Modal
                visible={showInput}
                transparent={true}
                animationType="fade"
                onRequestClose={handleInputCancel}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Go to Page</Text>
                        <TextInput
                            style={styles.modalInput}
                            value={inputValue}
                            onChangeText={setInputValue}
                            keyboardType="numeric"
                            autoFocus
                            selectTextOnFocus
                            maxLength={3}
                            returnKeyType="go"
                            onSubmitEditing={handleInputSubmit}
                            placeholder={`1-${totalPages}`}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleInputCancel}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleInputSubmit}>
                                <Text style={styles.buttonText}>Go</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: moderateScale(20),
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingBottom: moderateScale(20),
        backgroundColor: 'transparent',
    },
    pageNumber: {
        fontSize: scaleFont(16),
        color: '#000',
        fontWeight: 'bold',
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(12),
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: moderateScale(30),
        paddingVertical: moderateScale(25),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        minWidth: moderateScale(280),
    },
    modalTitle: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: '#000',
        marginBottom: moderateScale(20),
    },
    modalInput: {
        borderWidth: 2,
        borderColor: '#4555b9',
        borderRadius: 10,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(12),
        fontSize: scaleFont(18),
        textAlign: 'center',
        backgroundColor: '#fff',
        marginBottom: moderateScale(25),
        minWidth: moderateScale(100),
        fontWeight: 'bold',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#4555b9',
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(12),
        borderRadius: 10,
        flex: 1,
        marginHorizontal: moderateScale(5),
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cancelButtonText: {
        color: '#666',
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default PageFooter;
