import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPage24Props {
    pageNumber: number;
}

export default function IntroductionPage24({ pageNumber }: IntroductionPage24Props) {
    const [name, setName] = useState('');
    const [birthplace, setBirthplace] = useState('');
    const [dob, setDob] = useState('');
    const [loveStatement, setLoveStatement] = useState('');

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState<'name' | 'birthplace' | 'dob' | 'love' | null>(null);
    const [tempValue, setTempValue] = useState('');

    const openModal = (field: 'name' | 'birthplace' | 'dob' | 'love') => {
        setCurrentField(field);
        // Set current value in temp
        switch (field) {
            case 'name':
                setTempValue(name);
                break;
            case 'birthplace':
                setTempValue(birthplace);
                break;
            case 'dob':
                setTempValue(dob);
                break;
            case 'love':
                setTempValue(loveStatement);
                break;
        }
        setModalVisible(true);
    };

    const saveAndClose = () => {
        // Save the temp value to the appropriate field
        switch (currentField) {
            case 'name':
                setName(tempValue);
                break;
            case 'birthplace':
                setBirthplace(tempValue);
                break;
            case 'dob':
                setDob(tempValue);
                break;
            case 'love':
                setLoveStatement(tempValue);
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
            case 'name':
                return 'MY NAME IS:';
            case 'birthplace':
                return 'I WAS BORN AND RAISED IN:';
            case 'dob':
                return 'MY D.O.B IS:';
            case 'love':
                return 'I LOVE HIP-HOP AND THIS IS MY JOURNEY:';
            default:
                return '';
        }
    };

    const getFieldValue = (field: 'name' | 'birthplace' | 'dob' | 'love') => {
        switch (field) {
            case 'name':
                return name;
            case 'birthplace':
                return birthplace;
            case 'dob':
                return dob;
            case 'love':
                return loveStatement;
        }
    };

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {/* Pink ink splatter at top right */}
                    <Image
                        source={require('../assets/ink_blot.png')}
                        style={styles.inkSplatter}
                        resizeMode="contain"
                    />

                    {/* Title Section */}
                    <View style={styles.titleSection}>
                        <Text style={styles.titleMain}>HIP HOP IS:</Text>
                        <Text style={styles.titleKeywords}>
                            RAP DJ'ING CULTURE FLOW STYLE{'\n'}
                            LYRICS RHYMES GRAFFITI B-BOY{'\n'}
                            FASHION BEATBOXING SAMPLING
                        </Text>
                    </View>

                    {/* MY NAME IS Section */}
                    <TouchableOpacity style={styles.section} onPress={() => openModal('name')} activeOpacity={0.7}>
                        <Text style={styles.label}>MY NAME IS:</Text>
                        <View style={styles.inputDisplay}>
                            <Text style={[styles.inputText, !name && styles.placeholder]}>
                                {name || 'Tap to enter your name...'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* I WAS BORN AND RAISED IN Section */}
                    <TouchableOpacity style={styles.section} onPress={() => openModal('birthplace')} activeOpacity={0.7}>
                        <Text style={styles.label}>I WAS BORN AND RAISED IN:</Text>
                        <View style={styles.inputDisplay}>
                            <Text style={[styles.inputText, !birthplace && styles.placeholder]}>
                                {birthplace || 'Tap to enter your birthplace...'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* MY D.O.B IS Section */}
                    <TouchableOpacity style={styles.section} onPress={() => openModal('dob')} activeOpacity={0.7}>
                        <Text style={styles.label}>MY D.O.B IS:</Text>
                        <View style={styles.inputDisplay}>
                            <Text style={[styles.inputText, !dob && styles.placeholder]}>
                                {dob || 'Tap to enter your date of birth...'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* I LOVE HIP-HOP Section */}
                    <TouchableOpacity style={styles.section} onPress={() => openModal('love')} activeOpacity={0.7}>
                        <Text style={styles.label}>I LOVE HIP-HOP AND THIS IS MY{'\n'}JOURNEY:</Text>
                        <View style={styles.inputDisplay}>
                            <Text style={[styles.inputText, !loveStatement && styles.placeholder]}>
                                {loveStatement || 'Tap to share your hip-hop journey...'}
                            </Text>
                        </View>
                    </TouchableOpacity>

                    {/* Bottom section with microphone and page number */}
                    <View style={styles.bottomSection}>
                        {/* Microphone Icon */}
                        <Image
                            source={require('../assets/microphone.png')}
                            style={styles.microphoneIcon}
                            resizeMode="contain"
                        />
                    </View>
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
                            multiline={currentField === 'love'}
                            numberOfLines={currentField === 'love' ? 4 : 1}
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
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(20),
        justifyContent: 'space-between',
    },
    inkSplatter: {
        position: 'absolute',
        top: moderateScale(5),
        right: moderateScale(-5),
        width: moderateScale(100),
        height: moderateScale(100),
        opacity: 1,
        zIndex: 1,
    },
    titleSection: {
        marginTop: moderateScale(10),
        marginBottom: moderateScale(15),
        alignItems: 'center',
    },
    titleMain: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: '#8B4CD8',
        marginBottom: moderateScale(10),
        letterSpacing: 2,
    },
    titleKeywords: {
        fontSize: scaleFont(11),
        color: '#8B4CD8',
        textAlign: 'center',
        lineHeight: scaleFont(16),
        fontWeight: '600',
        letterSpacing: 1.5,
    },
    section: {
        marginBottom: moderateScale(15),
    },
    label: {
        fontSize: scaleFont(14),
        fontWeight: 'bold',
        color: '#8B4CD8',
        marginBottom: moderateScale(8),
        letterSpacing: 0.5,
        textAlign: 'center',
    },
    inputDisplay: {
        borderBottomWidth: 2,
        borderBottomColor: '#333',
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(5),
        minHeight: moderateScale(35),
        backgroundColor: '#fff',
    },
    inputText: {
        fontSize: scaleFont(16),
        color: '#000',
    },
    placeholder: {
        color: '#C0C0C0',
        fontStyle: 'italic',
        fontSize: scaleFont(15),
    },
    bottomSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: moderateScale(10),
    },
    microphoneIcon: {
        width: moderateScale(60),
        height: moderateScale(60),
        tintColor: '#8B4CD8',
    },
    pageNumber: {
        fontSize: scaleFont(20),
        color: '#000',
        fontWeight: 'bold',
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
        minHeight: moderateScale(50),
        maxHeight: moderateScale(150),
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
