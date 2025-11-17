import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPage25Props {
    pageNumber: number;
}

export default function IntroductionPage25({ pageNumber }: IntroductionPage25Props) {
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState<'question1' | 'question2' | null>(null);
    const [tempValue, setTempValue] = useState('');

    const openModal = (field: 'question1' | 'question2') => {
        setCurrentField(field);
        // Set current value in temp
        switch (field) {
            case 'question1':
                setTempValue(question1);
                break;
            case 'question2':
                setTempValue(question2);
                break;
        }
        setModalVisible(true);
    };

    const saveAndClose = () => {
        // Save the temp value to the appropriate field
        switch (currentField) {
            case 'question1':
                setQuestion1(tempValue);
                break;
            case 'question2':
                setQuestion2(tempValue);
                break;
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
            case 'question1':
                return '1. When did you first discover Hip-Hop music?';
            case 'question2':
                return '2. Do you remember where you were?';
            default:
                return '';
        }
    };

    const getFieldValue = (field: 'question1' | 'question2') => {
        switch (field) {
            case 'question1':
                return question1;
            case 'question2':
                return question2;
        }
    };

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {/* Crown icon at top right */}
                    <Image
                        source={require('../assets/crown.png')}
                        style={styles.crownIcon}
                        resizeMode="contain"
                    />

                    {/* Question 1 Section */}
                    <View style={styles.questionSection}>
                        <Text style={styles.questionText}>
                            1. When did you first discover Hip-Hop{'\n'}
                            <Text style={styles.questionTextIndent}>music?</Text>
                        </Text>

                        <TouchableOpacity
                            style={styles.inputArea}
                            onPress={() => openModal('question1')}
                            activeOpacity={0.7}
                        >
                            {question1 ? (
                                <Text style={styles.answerText}>
                                    {question1}
                                </Text>
                            ) : (
                                <View style={styles.emptyBox}>
                                    <Text style={styles.placeholder}>Tap to write your answer...</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Question 2 Section */}
                    <View style={styles.questionSection}>
                        <Text style={styles.questionText}>
                            2. Do you remember where you{'\n'}
                            <Text style={styles.questionTextIndent}>were?</Text>
                        </Text>

                        <TouchableOpacity
                            style={styles.inputArea}
                            onPress={() => openModal('question2')}
                            activeOpacity={0.7}
                        >
                            {question2 ? (
                                <Text style={styles.answerText}>
                                    {question2}
                                </Text>
                            ) : (
                                <View style={styles.emptyBox}>
                                    <Text style={styles.placeholder}>Tap to write your answer...</Text>
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>

                    {/* Dancing figure icon at bottom left */}
                    <Image
                        source={require('../assets/b_boy1.png')}
                        style={styles.dancerIcon}
                        resizeMode="contain"
                    />
                </View>
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
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(30),
        paddingTop: moderateScale(80),
        paddingBottom: moderateScale(40),
        justifyContent: 'space-between',
    },
    crownIcon: {
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(20),
        width: moderateScale(70),
        height: moderateScale(70),
        tintColor: '#8B4CD8',
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
    },
    lineContainer: {
        marginBottom: moderateScale(12),
    },
    line: {
        height: 1.5,
        backgroundColor: '#333',
        width: '100%',
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
    dancerIcon: {
        width: moderateScale(90),
        height: moderateScale(90),
        alignSelf: 'flex-start',
        marginLeft: moderateScale(20),
        marginTop: moderateScale(-20),
        tintColor: '#FF1493',
    },
    pageNumber: {
        fontSize: scaleFont(18),
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(10),
        fontWeight: '600',
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
