import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView, Platform, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';
import * as Storage from '../utils/supabaseStorage';

interface IntroductionPage27Props {
    pageNumber: number;
}

export default function IntroductionPage27({ pageNumber }: IntroductionPage27Props) {
    const [question5, setQuestion5] = useState('');
    const [question6, setQuestion6] = useState('');

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState<'question5' | 'question6' | null>(null);
    const [tempValue, setTempValue] = useState('');

    // Load saved responses
    useEffect(() => {
        loadSavedResponses();
    }, []);

    const loadSavedResponses = async () => {
        const response = await Storage.loadPageResponse(pageNumber);
        if (response) {
            if (response.responses.question5) setQuestion5(response.responses.question5);
            if (response.responses.question6) setQuestion6(response.responses.question6);
        }
    };

    const openModal = (field: 'question5' | 'question6') => {
        console.log('Opening modal for:', field);
        setCurrentField(field);
        switch (field) {
            case 'question5':
                setTempValue(question5);
                break;
            case 'question6':
                setTempValue(question6);
                break;
        }
        setModalVisible(true);
    };

    const saveAndClose = async () => {
        if (currentField) {
            switch (currentField) {
                case 'question5':
                    setQuestion5(tempValue);
                    await Storage.savePageResponse(pageNumber, 'question5', tempValue);
                    break;
                case 'question6':
                    setQuestion6(tempValue);
                    await Storage.savePageResponse(pageNumber, 'question6', tempValue);
                    break;
            }
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

    const getFieldLabel = () => {
        switch (currentField) {
            case 'question5':
                return '5. Who are (or were) your hottest (or as we used to say "illest") MCs?';
            case 'question6':
                return '6. Did Hip-Hop inspire you to become, or want to become, a lyricist, rapper, dancer, or DJ? If so, was there anyone in particular who inspired you?';
            default:
                return '';
        }
    };

    return (
        <>
            <SafeAreaWrapper backgroundColor={colors.primary}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        {/* Microphone icon at top right */}
                        <Image
                            source={require('../assets/microphone.png')}
                            style={styles.musicIcon}
                            resizeMode="contain"
                        />

                        {/* Question 5 Section */}
                        <View style={styles.questionSection}>
                            <Text style={styles.questionText}>
                                5. Who are (or were) your hottest (or as we{'\n'}
                                <Text style={styles.questionTextIndent}>used to say "illest") MCs?</Text>
                            </Text>

                            <TouchableOpacity
                                style={styles.inputArea}
                                onPress={() => openModal('question5')}
                                activeOpacity={0.7}
                            >
                                {question5 ? (
                                    <Text style={styles.answerText}>
                                        {question5}
                                    </Text>
                                ) : (
                                    <View style={styles.emptyBox}>
                                        <Text style={styles.placeholder}>Tap to write your answer...</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>

                        {/* Question 6 Section */}
                        <View style={styles.questionSection}>
                            <Text style={styles.questionText}>
                                6. Did Hip-Hop inspire you to become, or want to{'\n'}
                                <Text style={styles.questionTextIndent}>become, a lyricist, rapper, dancer, or DJ? If so,{'\n'}</Text>
                                <Text style={styles.questionTextIndent}>was there anyone in particular who inspired you?</Text>
                            </Text>

                            <TouchableOpacity
                                style={styles.inputArea}
                                onPress={() => openModal('question6')}
                                activeOpacity={0.7}
                            >
                                {question6 ? (
                                    <Text style={styles.answerText}>
                                        {question6}
                                    </Text>
                                ) : (
                                    <View style={styles.emptyBox}>
                                        <Text style={styles.placeholder}>Tap to write your answer...</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>

                        {/* B-boy icon at bottom left */}
                        <Image
                            source={require('../assets/b_boy1.png')}
                            style={styles.graffitiIcon}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </SafeAreaWrapper>

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
                        <Text style={styles.modalTitle}>{getFieldLabel()}</Text>
                        <TextInput
                            style={styles.modalInput}
                            value={tempValue}
                            onChangeText={setTempValue}
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
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F0',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(30),
        paddingTop: moderateScale(80),
        paddingBottom: moderateScale(40),
        justifyContent: 'space-between',
    },
    musicIcon: {
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(20),
        width: moderateScale(70),
        height: moderateScale(70),
        tintColor: '#6A5ACD',
    },
    questionSection: {
        marginBottom: moderateScale(20),
    },
    questionText: {
        fontSize: scaleFont(18),
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#000',
        marginBottom: moderateScale(20),
        lineHeight: scaleFont(26),
        textAlign: 'center',
    },
    questionTextIndent: {
        fontSize: scaleFont(18),
        fontWeight: '600',
        fontStyle: 'italic',
        paddingLeft: moderateScale(40),
    },
    inputArea: {
        position: 'relative',
        minHeight: moderateScale(180),
        width: '100%',
    },
    emptyBox: {
        width: '100%',
        height: moderateScale(180),
        borderWidth: 1.5,
        borderColor: '#333',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        pointerEvents: 'none',
    },
    answerText: {
        fontSize: scaleFont(14),
        color: '#000',
        lineHeight: scaleFont(22),
        padding: moderateScale(12),
    },
    placeholder: {
        fontSize: scaleFont(14),
        color: '#999',
        fontStyle: 'italic',
    },
    graffitiIcon: {
        width: moderateScale(90),
        height: moderateScale(90),
        alignSelf: 'flex-start',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(-20),
        tintColor: '#FF1493',
    },
    // Modal styles
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
        fontSize: scaleFont(16),
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
