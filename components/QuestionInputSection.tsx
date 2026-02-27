import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { scaleFont, moderateScale, isSmallDevice } from '../utils/responsive';

interface QuestionInputSectionProps {
    questionNumber: number;
    questionText: string;
    value: string;
    onPress: () => void;
    // For longer questions, reduce font size automatically
    isLongQuestion?: boolean;
}

export default function QuestionInputSection({
    questionNumber,
    questionText,
    value,
    onPress,
    isLongQuestion = false,
}: QuestionInputSectionProps) {
    // Adaptive font size based on question length
    const getQuestionFontSize = () => {
        if (isLongQuestion) {
            return isSmallDevice() ? scaleFont(14) : scaleFont(15);
        }
        return isSmallDevice() ? scaleFont(16) : scaleFont(18);
    };

    const getLineHeight = () => {
        if (isLongQuestion) {
            return isSmallDevice() ? scaleFont(20) : scaleFont(22);
        }
        return isSmallDevice() ? scaleFont(22) : scaleFont(26);
    };

    // Calculate input box height based on whether it's a long question
    const getInputBoxHeight = () => {
        if (isLongQuestion) {
            return moderateScale(150);
        }
        return moderateScale(180);
    };

    return (
        <View style={styles.questionSection}>
            <Text style={[
                styles.questionText,
                {
                    fontSize: getQuestionFontSize(),
                    lineHeight: getLineHeight(),
                }
            ]}>
                {questionNumber}. {questionText}
            </Text>

            <TouchableOpacity
                style={[styles.inputArea, { minHeight: getInputBoxHeight() }]}
                onPress={onPress}
                activeOpacity={0.7}
            >
                {value ? (
                    <View style={[styles.filledBox, { minHeight: getInputBoxHeight() }]}>
                        <Text style={styles.answerText} numberOfLines={8}>
                            {value}
                        </Text>
                    </View>
                ) : (
                    <View style={[styles.emptyBox, { height: getInputBoxHeight() }]}>
                        <Text style={styles.placeholder}>Tap to write your answer...</Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    questionSection: {
        marginBottom: moderateScale(20),
        zIndex: 100, // Above navigation zones
    },
    questionText: {
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#000',
        marginBottom: moderateScale(12),
        textAlign: 'center',
    },
    inputArea: {
        position: 'relative',
        width: '100%',
        zIndex: 100, // Above navigation zones
    },
    emptyBox: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#333',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    filledBox: {
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#333',
        borderRadius: 4,
        backgroundColor: '#fff',
        padding: moderateScale(10),
    },
    answerText: {
        fontSize: scaleFont(14),
        color: '#000',
        lineHeight: scaleFont(20),
    },
    placeholder: {
        fontSize: scaleFont(14),
        color: '#999',
        fontStyle: 'italic',
    },
});
