import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Modal,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { PageInputField } from '../types/pageTypes';
import { savePageResponse, loadPageResponse } from '../utils/pageStorage';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface InteractiveFieldOverlayProps {
    pageNumber: number;
    fields: PageInputField[];
}

export default function InteractiveFieldOverlay({
    pageNumber,
    fields,
}: InteractiveFieldOverlayProps) {
    const [responses, setResponses] = useState<{ [key: string]: string }>({});
    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState<PageInputField | null>(null);
    const [tempValue, setTempValue] = useState('');

    // Load saved responses on mount
    useEffect(() => {
        loadPageResponse(pageNumber).then(data => {
            if (data) {
                setResponses(data.responses);
            }
        });
    }, [pageNumber]);

    const openModal = (field: PageInputField) => {
        setCurrentField(field);
        setTempValue(responses[field.id] || '');
        setModalVisible(true);
    };

    const saveAndClose = async () => {
        if (currentField) {
            const newResponses = {
                ...responses,
                [currentField.id]: tempValue,
            };
            setResponses(newResponses);
            await savePageResponse(pageNumber, currentField.id, tempValue);
        }
        setModalVisible(false);
        setTempValue('');
        setCurrentField(null);
    };

    const cancelModal = () => {
        setModalVisible(false);
        setTempValue('');
        setCurrentField(null);
    };

    const isMultiline = (field: PageInputField | null) => {
        if (!field) return false;
        const multilineTypes = [
            'textarea',
            'text_area',
            'long_text',
            'text_lines',
            'multiline_text',
            'multi-line text',
            'multi_line_text',
        ];
        return multilineTypes.includes(field.type) || (field.lines && field.lines > 1);
    };

    return (
        <>
            {/* Interactive zones - positioned to overlay the image */}
            <View style={styles.overlayContainer}>
                {fields.map((field, index) => (
                    <TouchableOpacity
                        key={`${field.id}-${index}`}
                        style={[
                            styles.interactiveZone,
                            // Position based on field order if no explicit position
                            { top: `${15 + index * 20}%` },
                        ]}
                        onPress={() => openModal(field)}
                        activeOpacity={0.7}
                    >
                        <View style={styles.interactiveButton}>
                            <Text style={styles.interactiveText} numberOfLines={1}>
                                {responses[field.id] || 'Tap to answer...'}
                            </Text>
                            <Text style={styles.editIcon}>✏️</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Input Modal */}
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={cancelModal}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.modalOverlay}
                >
                    <View style={styles.modalContainer}>
                        <ScrollView
                            style={styles.modalScroll}
                            contentContainerStyle={styles.modalScrollContent}
                            keyboardShouldPersistTaps="handled"
                        >
                            <Text style={styles.modalTitle}>
                                {currentField?.label || 'Enter your response'}
                            </Text>
                            <TextInput
                                style={[
                                    styles.modalInput,
                                    isMultiline(currentField) && styles.modalInputMultiline,
                                ]}
                                value={tempValue}
                                onChangeText={setTempValue}
                                placeholder="Type your answer here..."
                                placeholderTextColor="#999"
                                multiline={currentField ? isMultiline(currentField) : false}
                                numberOfLines={currentField?.lines || (isMultiline(currentField) ? 4 : 1)}
                                autoFocus
                                selectTextOnFocus
                                textAlignVertical="top"
                            />
                            <View style={styles.modalButtons}>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.cancelButton]}
                                    onPress={cancelModal}
                                >
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.modalButton, styles.saveButton]}
                                    onPress={saveAndClose}
                                >
                                    <Text style={styles.saveButtonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        pointerEvents: 'box-none',
    },
    interactiveZone: {
        position: 'absolute',
        left: '5%',
        right: '5%',
        paddingVertical: moderateScale(8),
        pointerEvents: 'auto',
    },
    interactiveButton: {
        backgroundColor: 'rgba(139, 76, 216, 0.15)',
        borderWidth: 2,
        borderColor: '#8B4CD8',
        borderStyle: 'dashed',
        borderRadius: 8,
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    interactiveText: {
        flex: 1,
        fontSize: scaleFont(14),
        color: '#333',
        fontStyle: 'italic',
    },
    editIcon: {
        fontSize: scaleFont(18),
        marginLeft: moderateScale(8),
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
        paddingHorizontal: moderateScale(25),
        paddingVertical: moderateScale(20),
        maxHeight: '80%',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    modalScroll: {
        width: '100%',
    },
    modalScrollContent: {
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#8B4CD8',
        marginBottom: moderateScale(15),
        textAlign: 'center',
    },
    modalInput: {
        borderWidth: 2,
        borderColor: '#8B4CD8',
        borderRadius: 10,
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(12),
        fontSize: scaleFont(16),
        backgroundColor: '#fff',
        marginBottom: moderateScale(20),
        width: '100%',
        minHeight: moderateScale(50),
    },
    modalInputMultiline: {
        minHeight: moderateScale(120),
        maxHeight: moderateScale(250),
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
