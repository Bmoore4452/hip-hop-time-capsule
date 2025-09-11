import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

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
        <View style={styles.footer}>
            {showInput ? (
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Go to page:</Text>
                    <TextInput
                        style={styles.input}
                        value={inputValue}
                        onChangeText={setInputValue}
                        keyboardType="numeric"
                        autoFocus
                        selectTextOnFocus
                        maxLength={3}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleInputSubmit}>
                        <Text style={styles.buttonText}>Go</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleInputCancel}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity onPress={handlePageNumberPress}>
                    <Text style={styles.pageNumber}>{currentPage}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingBottom: 20,
        backgroundColor: 'transparent',
    },
    pageNumber: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputLabel: {
        fontSize: 14,
        color: '#000',
        marginRight: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 4,
        width: 50,
        textAlign: 'center',
        backgroundColor: '#fff',
        marginRight: 8,
    },
    button: {
        backgroundColor: '#4555b9',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
        marginLeft: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default PageFooter;
