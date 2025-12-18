import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView, Platform, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';
import * as Storage from '../utils/supabaseStorage';

interface IntroductionPage26Props {
    pageNumber: number;
}

export default function IntroductionPage26({ pageNumber }: IntroductionPage26Props) {
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState<'question3' | 'question4' | null>(null);
    const [tempValue, setTempValue] = useState('');

    // Load saved responses
    useEffect(() => {
        loadSavedResponses();
    }, []);

    const loadSavedResponses = async () => {
        const response = await Storage.loadPageResponse(pageNumber);
        if (response) {
            if (response.responses.question3) setQuestion3(response.responses.question3);
            if (response.responses.question4) setQuestion4(response.responses.question4);
        }
    };

    const openModal = (field: 'question3' | 'question4') => {
        console.log('Opening modal for:', field);
        setCurrentField(field);
        switch (field) {
            case 'question3':
                setTempValue(question3);
                break;
            case 'question4':
                setTempValue(question4);
                break;
        }
        setModalVisible(true);
    };

    const saveAndClose = async () => {
        if (currentField) {
            switch (currentField) {
                case 'question3':
                    setQuestion3(tempValue);
                    await Storage.savePageResponse(pageNumber, 'question3', tempValue);
                    break;
                case 'question4':
                    setQuestion4(tempValue);
                    await Storage.savePageResponse(pageNumber, 'question4', tempValue);
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
            case 'question3':
                return '3. What was the first song that caught your attention?';
            case 'question4':
                return '4. What were the emotions you felt hearing Hip-Hop for the first time?';
            default:
                return '';
        }
    };

    return (
        <>
            <SafeAreaWrapper backgroundColor={colors.primary}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        {/* Paint splatter icon at top right */}
                        <Image
                            source={require('../assets/ink_blot.png')}
                            style={styles.splatterIcon}
                            resizeMode="contain"
                        />

                        {/* Question 3 Section */}
                        <View style={styles.questionSection}>
                            <Text style={styles.questionText}>
                                3. What was the first song that caught{'\n'}
                                <Text style={styles.questionTextIndent}>your attention?</Text>
                            </Text>

                            <TouchableOpacity
                                style={styles.inputArea}
                                onPress={() => openModal('question3')}
                                activeOpacity={0.7}
                            >
                                {question3 ? (
                                    <Text style={styles.answerText}>
                                        {question3}
                                    </Text>
                                ) : (
                                    <View style={styles.emptyBox}>
                                        <Text style={styles.placeholder}>Tap to write your answer...</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>

                        {/* Question 4 Section */}
                        <View style={styles.questionSection}>
                            <Text style={styles.questionText}>
                                4. What were the emotions you felt hearing{'\n'}
                                <Text style={styles.questionTextIndent}>Hip-Hop for the first time?</Text>
                            </Text>

                            <TouchableOpacity
                                style={styles.inputArea}
                                onPress={() => openModal('question4')}
                                activeOpacity={0.7}
                            >
                                {question4 ? (
                                    <Text style={styles.answerText}>
                                        {question4}
                                    </Text>
                                ) : (
                                    <View style={styles.emptyBox}>
                                        <Text style={styles.placeholder}>Tap to write your answer...</Text>
                                    </View>
                                )}
                            </TouchableOpacity>
                        </View>

                        {/* Chain necklace icon at bottom left */}
                        <Image
                            source={require('../assets/hip_hop_chain.png')}
                            style={styles.necklaceIcon}
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
    splatterIcon: {
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(20),
        width: moderateScale(70),
        height: moderateScale(70),
        tintColor: '#FF69B4',
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
        paddingLeft: moderateScale(80),
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
    responseBox: {
        width: '100%',
        minHeight: moderateScale(180),
        borderWidth: 1.5,
        borderColor: '#333',
        borderRadius: 4,
        backgroundColor: '#fff',
        padding: moderateScale(12),
    },
    answerBox: {
        width: '100%',
        minHeight: moderateScale(180),
        borderWidth: 1.5,
        borderColor: '#333',
        borderRadius: 4,
        backgroundColor: '#fff',
        padding: moderateScale(12),
    },
    answerText: {
        fontSize: scaleFont(14),
        color: '#000',
        lineHeight: scaleFont(22),
    },
    placeholder: {
        fontSize: scaleFont(14),
        color: '#999',
        fontStyle: 'italic',
    },
    necklaceIcon: {
        width: moderateScale(80),
        height: moderateScale(80),
        alignSelf: 'flex-start',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(-20),
        tintColor: '#9370DB',
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
