import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { scaleFont, moderateScale } from '../utils/responsive';

interface InputModalProps {
    visible: boolean;
    title: string;
    value: string;
    onChangeText: (text: string) => void;
    onSave: () => void;
    onCancel: () => void;
}

export default function InputModal({
    visible,
    title,
    value,
    onChangeText,
    onSave,
    onCancel,
}: InputModalProps) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onCancel}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.modalOverlay}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <TextInput
                        style={styles.modalInput}
                        value={value}
                        onChangeText={onChangeText}
                        placeholder="Type or write here..."
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={8}
                        autoFocus
                        selectTextOnFocus
                    />
                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={[styles.modalButton, styles.cancelButton]}
                            onPress={onCancel}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.modalButton, styles.saveButton]}
                            onPress={onSave}
                        >
                            <Text style={styles.saveButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
        minWidth: moderateScale(320),
        maxWidth: '90%',
    },
    modalTitle: {
        fontSize: scaleFont(14),
        fontWeight: 'bold',
        color: '#8B4CD8',
        marginBottom: moderateScale(20),
        textAlign: 'center',
    },
    modalInput: {
        borderWidth: 2,
        borderColor: '#8B4CD8',
        borderRadius: 10,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(12),
        fontSize: scaleFont(16),
        textAlign: 'left',
        backgroundColor: '#fff',
        marginBottom: moderateScale(25),
        minWidth: moderateScale(280),
        minHeight: moderateScale(150),
        maxHeight: moderateScale(300),
        textAlignVertical: 'top',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(12),
        borderRadius: 10,
        flex: 1,
        marginHorizontal: moderateScale(5),
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    saveButton: {
        backgroundColor: '#8B4CD8',
    },
    cancelButtonText: {
        color: '#666',
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    saveButtonText: {
        color: '#fff',
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
