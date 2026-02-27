import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageSourcePropType } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import QuestionInputSection from './QuestionInputSection';
import InputModal from './InputModal';
import { moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

export interface Question {
    number: number;
    text: string;
    isLongQuestion?: boolean;
}

export interface QuestionPageConfig {
    questions: Question[];
    topIcon?: ImageSourcePropType;
    topIconTint?: string;
    bottomIcon?: ImageSourcePropType;
    bottomIconTint?: string;
}

interface QuestionPageTemplateProps {
    config: QuestionPageConfig;
    pageNumber: number;
}

// Default icons and colors
const DEFAULT_TOP_ICON = require('../assets/crown.png');
const DEFAULT_BOTTOM_ICON = require('../assets/b_boy1.png');
const DEFAULT_TOP_TINT = '#8B4CD8';
const DEFAULT_BOTTOM_TINT = '#FF1493';

export default function QuestionPageTemplate({ config, pageNumber }: QuestionPageTemplateProps) {
    const { questions, topIcon, topIconTint, bottomIcon, bottomIconTint } = config;

    // Create state for each question's answer
    const [answers, setAnswers] = useState<Record<number, string>>({});

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [tempValue, setTempValue] = useState('');

    const openModal = (question: Question) => {
        setCurrentQuestion(question);
        setTempValue(answers[question.number] || '');
        setModalVisible(true);
    };

    const saveAndClose = () => {
        if (currentQuestion) {
            setAnswers(prev => ({
                ...prev,
                [currentQuestion.number]: tempValue
            }));
        }
        setModalVisible(false);
        setTempValue('');
        setCurrentQuestion(null);
    };

    const cancelModal = () => {
        setModalVisible(false);
        setTempValue('');
        setCurrentQuestion(null);
    };

    const getFieldLabel = () => {
        if (!currentQuestion) return '';
        return `${currentQuestion.number}. ${currentQuestion.text}`;
    };

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {/* Top icon */}
                    <Image
                        source={topIcon || DEFAULT_TOP_ICON}
                        style={[
                            styles.topIcon,
                            { tintColor: topIconTint || DEFAULT_TOP_TINT }
                        ]}
                        resizeMode="contain"
                    />

                    {/* Render all questions */}
                    {questions.map((question) => (
                        <QuestionInputSection
                            key={question.number}
                            questionNumber={question.number}
                            questionText={question.text}
                            value={answers[question.number] || ''}
                            onPress={() => openModal(question)}
                            isLongQuestion={question.isLongQuestion}
                        />
                    ))}

                    {/* Bottom icon */}
                    <Image
                        source={bottomIcon || DEFAULT_BOTTOM_ICON}
                        style={[
                            styles.bottomIcon,
                            { tintColor: bottomIconTint || DEFAULT_BOTTOM_TINT }
                        ]}
                        resizeMode="contain"
                    />
                </View>
            </View>

            {/* Input Modal */}
            <InputModal
                visible={modalVisible}
                title={getFieldLabel()}
                value={tempValue}
                onChangeText={setTempValue}
                onSave={saveAndClose}
                onCancel={cancelModal}
            />
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
        paddingTop: moderateScale(90),
        paddingBottom: moderateScale(20),
        justifyContent: 'flex-start',
    },
    topIcon: {
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(20),
        width: moderateScale(70),
        height: moderateScale(70),
    },
    bottomIcon: {
        width: moderateScale(90),
        height: moderateScale(90),
        alignSelf: 'flex-start',
        marginLeft: moderateScale(20),
        marginTop: 'auto',
    },
});
