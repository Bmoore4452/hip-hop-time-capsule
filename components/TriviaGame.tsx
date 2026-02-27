import React, { useState, useCallback, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Pressable,
} from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { moderateScale, scaleFont } from '../utils/responsive';
import { colors } from '../utils/colors';
import { TriviaQuestion, getRandomQuestions } from '../utils/triviaData';

type GameState = 'splash' | 'playing' | 'feedback' | 'results';

interface TriviaGameProps {
    onContinue: () => void; // Navigate to page 91
    onShowNavigation?: () => void; // Show navigation controls
    onGameStateChange?: (state: GameState) => void; // Report game state changes
}

const MAX_QUESTIONS = 10;
const PASS_PERCENTAGE = 70;

// Shuffle array helper
const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function TriviaGame({ onContinue, onShowNavigation, onGameStateChange }: TriviaGameProps) {
    // Game state
    const [gameState, setGameState] = useState<GameState>('splash');
    const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);
    const [skipped, setSkipped] = useState(false);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

    // Report game state changes to parent
    useEffect(() => {
        onGameStateChange?.(gameState);
    }, [gameState, onGameStateChange]);

    const currentQuestion = questions[currentIndex];
    const isLastQuestion = currentIndex >= MAX_QUESTIONS - 1;
    const percentage = Math.round((score / MAX_QUESTIONS) * 100);
    const passed = percentage >= PASS_PERCENTAGE;

    const startGame = useCallback(() => {
        const randomQuestions = getRandomQuestions(MAX_QUESTIONS);
        setQuestions(randomQuestions);
        setCurrentIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setLastAnswerCorrect(null);
        setSkipped(false);
        // Shuffle options for first question
        if (randomQuestions.length > 0) {
            setShuffledOptions(shuffleArray(randomQuestions[0].options));
        }
        setGameState('playing');
    }, []);

    const handleSubmit = () => {
        if (!selectedAnswer) return;

        const isCorrect = selectedAnswer === currentQuestion.answer;
        setLastAnswerCorrect(isCorrect);
        setSkipped(false);

        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        setGameState('feedback');
    };

    const handleSkip = () => {
        setLastAnswerCorrect(false);
        setSkipped(true);
        setGameState('feedback');
    };

    const handleNextQuestion = () => {
        if (isLastQuestion) {
            setGameState('results');
        } else {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setSelectedAnswer(null);
            setLastAnswerCorrect(null);
            setSkipped(false);
            // Shuffle options for next question
            if (questions[nextIndex]) {
                setShuffledOptions(shuffleArray(questions[nextIndex].options));
            }
            setGameState('playing');
        }
    };

    const handleEndQuiz = () => {
        setGameState('results');
    };

    const handleRestart = () => {
        startGame();
    };

    // Splash Screen
    if (gameState === 'splash') {
        return (
            <SafeAreaWrapper backgroundColor={colors.primary}>
                <Pressable style={styles.container} onPress={onShowNavigation}>
                    <View style={styles.splashContent} pointerEvents="box-none">
                        <View style={styles.bonusBadge}>
                            <Text style={styles.bonusText}>BONUS</Text>
                        </View>
                        <Text style={styles.splashTitle}>Hip-Hop{"\n"}Time Capsule{"\n"}Trivia</Text>
                        <Text style={styles.splashSubtitle}>Test your Hip-Hop knowledge!</Text>
                        <Text style={styles.splashInfo}>10 Random Questions</Text>

                        <TouchableOpacity style={styles.playButton} onPress={startGame}>
                            <Text style={styles.playButtonText}>PLAY</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
                            <Text style={styles.continueButtonText}>Skip to Next Section →</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </SafeAreaWrapper>
        );
    }

    // Playing Screen
    if (gameState === 'playing') {
        const hasSelection = selectedAnswer !== null;

        return (
            <SafeAreaWrapper backgroundColor={colors.primary}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Hip-Hop Time Capsule Trivia</Text>
                        <Text style={styles.questionCounter}>
                            Question {currentIndex + 1} of {MAX_QUESTIONS}
                        </Text>
                    </View>

                    {/* Question */}
                    <ScrollView
                        style={styles.questionContainer}
                        contentContainerStyle={styles.questionContent}
                    >
                        <Text style={styles.questionText}>{currentQuestion?.question}</Text>

                        {/* Multiple Choice Options */}
                        <View style={styles.optionsContainer}>
                            {shuffledOptions.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[
                                        styles.optionButton,
                                        selectedAnswer === option && styles.optionButtonSelected
                                    ]}
                                    onPress={() => setSelectedAnswer(option)}
                                >
                                    <Text style={[
                                        styles.optionLetter,
                                        selectedAnswer === option && styles.optionLetterSelected
                                    ]}>
                                        {String.fromCharCode(65 + index)}.
                                    </Text>
                                    <Text style={[
                                        styles.optionText,
                                        selectedAnswer === option && styles.optionTextSelected
                                    ]}>
                                        {option}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Submit Button */}
                        <TouchableOpacity
                            style={[styles.submitButton, !hasSelection && styles.submitButtonDisabled]}
                            onPress={handleSubmit}
                            disabled={!hasSelection}
                        >
                            <Text style={[styles.submitButtonText, !hasSelection && styles.submitButtonTextDisabled]}>
                                SUBMIT
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>

                    {/* Bottom Controls */}
                    <View style={styles.bottomControls}>
                        <TouchableOpacity style={styles.endButton} onPress={handleEndQuiz}>
                            <Text style={styles.endButtonText}>End Quiz</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                            <Text style={styles.skipButtonText}>Skip →</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaWrapper>
        );
    }

    // Feedback Screen
    if (gameState === 'feedback') {
        return (
            <SafeAreaWrapper backgroundColor={colors.primary}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Hip-Hop Time Capsule Trivia</Text>
                    </View>

                    {/* Feedback */}
                    <View style={styles.feedbackContainer}>
                        {skipped ? (
                            <View style={styles.feedbackContent}>
                                <Text style={styles.skippedText}>SKIPPED</Text>
                                <Text style={styles.feedbackLabel}>The correct answer was:</Text>
                                <Text style={styles.correctAnswerText}>{currentQuestion?.answer}</Text>
                            </View>
                        ) : lastAnswerCorrect ? (
                            <View style={styles.feedbackContent}>
                                <Text style={styles.correctText}>✓ CORRECT!</Text>
                                <Text style={styles.feedbackLabel}>Great job!</Text>
                            </View>
                        ) : (
                            <View style={styles.feedbackContent}>
                                <Text style={styles.incorrectText}>✗ INCORRECT</Text>
                                <Text style={styles.feedbackLabel}>The correct answer was:</Text>
                                <Text style={styles.correctAnswerText}>{currentQuestion?.answer}</Text>
                            </View>
                        )}

                        <Text style={styles.scoreText}>
                            Score: {score} / {currentIndex + 1}
                        </Text>
                    </View>

                    {/* Bottom Controls */}
                    <View style={styles.feedbackControls}>
                        <TouchableOpacity style={styles.restartButton} onPress={handleRestart}>
                            <Text style={styles.restartButtonText}>Restart</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
                            <Text style={styles.nextButtonText}>
                                {isLastQuestion ? 'See Results' : 'Next Question →'}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.endButton} onPress={handleEndQuiz}>
                            <Text style={styles.endButtonText}>End Quiz</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaWrapper>
        );
    }

    // Results Screen
    if (gameState === 'results') {
        return (
            <SafeAreaWrapper backgroundColor={colors.primary}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Hip-Hop Time Capsule Trivia</Text>
                    </View>

                    {/* Results */}
                    <View style={styles.resultsContainer}>
                        <Text style={styles.resultsTitle}>Quiz Complete!</Text>

                        <View style={[styles.percentageCircle, passed ? styles.passedCircle : styles.failedCircle]}>
                            <Text style={styles.percentageText}>{percentage}%</Text>
                        </View>

                        <Text style={styles.scoreResultText}>
                            You got {score} out of {MAX_QUESTIONS} correct
                        </Text>

                        {passed ? (
                            <>
                                <Text style={styles.celebrationText}>🎉 CONGRATULATIONS! 🎉</Text>
                                <Text style={styles.resultMessage}>
                                    You really know your Hip-Hop history!
                                </Text>
                            </>
                        ) : (
                            <>
                                <Text style={styles.tryAgainText}>Keep Learning!</Text>
                                <Text style={styles.resultMessage}>
                                    Don't give up! Hip-Hop culture is deep.{'\n'}
                                    Try again and improve your score!
                                </Text>
                            </>
                        )}
                    </View>

                    {/* Bottom Controls */}
                    <View style={styles.resultsControls}>
                        <TouchableOpacity style={styles.playAgainButton} onPress={handleRestart}>
                            <Text style={styles.playAgainButtonText}>Play Again</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.nextSectionButton} onPress={onContinue}>
                            <Text style={styles.nextSectionButtonText}>Continue to Next Section →</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaWrapper>
        );
    }

    return null;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Splash Screen
    splashContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(30),
    },
    bonusBadge: {
        backgroundColor: '#8B4CD8',
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(10),
        transform: [{ rotate: '-5deg' }],
        marginBottom: moderateScale(20),
    },
    bonusText: {
        color: '#fff',
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    splashTitle: {
        fontSize: scaleFont(36),
        fontWeight: 'bold',
        color: colors.accent,
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: moderateScale(15),
    },
    splashSubtitle: {
        fontSize: scaleFont(18),
        color: '#666',
        marginBottom: moderateScale(10),
    },
    splashInfo: {
        fontSize: scaleFont(14),
        color: '#999',
        marginBottom: moderateScale(40),
    },
    playButton: {
        backgroundColor: '#8B4CD8',
        paddingHorizontal: moderateScale(60),
        paddingVertical: moderateScale(18),
        borderRadius: moderateScale(30),
        marginBottom: moderateScale(20),
    },
    playButtonText: {
        color: '#fff',
        fontSize: scaleFont(22),
        fontWeight: 'bold',
    },
    continueButton: {
        padding: moderateScale(15),
    },
    continueButtonText: {
        color: '#8B4CD8',
        fontSize: scaleFont(16),
    },

    // Header
    header: {
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(15),
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: colors.accent,
        fontStyle: 'italic',
    },
    questionCounter: {
        fontSize: scaleFont(14),
        color: '#666',
        marginTop: moderateScale(5),
    },

    // Question Screen
    questionContainer: {
        flex: 1,
    },
    questionContent: {
        padding: moderateScale(25),
        alignItems: 'center',
    },
    questionText: {
        fontSize: scaleFont(20),
        color: '#333',
        textAlign: 'center',
        lineHeight: scaleFont(30),
        marginBottom: moderateScale(25),
    },
    optionsContainer: {
        width: '100%',
        marginBottom: moderateScale(20),
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderWidth: 2,
        borderColor: '#8B4CD8',
        borderRadius: moderateScale(10),
        padding: moderateScale(15),
        marginBottom: moderateScale(12),
        backgroundColor: '#fff',
    },
    optionButtonSelected: {
        backgroundColor: '#8B4CD8',
        borderColor: '#8B4CD8',
    },
    optionLetter: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: '#8B4CD8',
        marginRight: moderateScale(10),
    },
    optionLetterSelected: {
        color: '#fff',
    },
    optionText: {
        fontSize: scaleFont(16),
        color: '#333',
        flex: 1,
    },
    optionTextSelected: {
        color: '#fff',
    },
    submitButton: {
        backgroundColor: '#8B4CD8',
        paddingHorizontal: moderateScale(50),
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(25),
    },
    submitButtonDisabled: {
        backgroundColor: '#ddd',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: scaleFont(18),
        fontWeight: 'bold',
    },
    submitButtonTextDisabled: {
        color: '#999',
    },

    // Bottom Controls
    bottomControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: moderateScale(20),
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    endButton: {
        padding: moderateScale(10),
    },
    endButtonText: {
        color: '#FF6B6B',
        fontSize: scaleFont(14),
    },
    skipButton: {
        padding: moderateScale(10),
    },
    skipButtonText: {
        color: '#8B4CD8',
        fontSize: scaleFont(16),
        fontWeight: '600',
    },

    // Feedback Screen
    feedbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(30),
    },
    feedbackContent: {
        alignItems: 'center',
        marginBottom: moderateScale(30),
    },
    correctText: {
        fontSize: scaleFont(32),
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: moderateScale(10),
    },
    incorrectText: {
        fontSize: scaleFont(32),
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginBottom: moderateScale(10),
    },
    skippedText: {
        fontSize: scaleFont(28),
        fontWeight: 'bold',
        color: '#FFA500',
        marginBottom: moderateScale(10),
    },
    feedbackLabel: {
        fontSize: scaleFont(16),
        color: '#666',
        marginBottom: moderateScale(10),
    },
    correctAnswerText: {
        fontSize: scaleFont(22),
        fontWeight: 'bold',
        color: '#8B4CD8',
        textAlign: 'center',
    },
    scoreText: {
        fontSize: scaleFont(18),
        color: '#333',
    },
    feedbackControls: {
        padding: moderateScale(20),
        gap: moderateScale(15),
    },
    restartButton: {
        alignSelf: 'center',
        padding: moderateScale(10),
    },
    restartButtonText: {
        color: '#666',
        fontSize: scaleFont(14),
    },
    nextButton: {
        backgroundColor: '#8B4CD8',
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(25),
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#fff',
        fontSize: scaleFont(18),
        fontWeight: 'bold',
    },

    // Results Screen
    resultsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: moderateScale(30),
    },
    resultsTitle: {
        fontSize: scaleFont(28),
        fontWeight: 'bold',
        color: '#333',
        marginBottom: moderateScale(25),
    },
    percentageCircle: {
        width: moderateScale(150),
        height: moderateScale(150),
        borderRadius: moderateScale(75),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(20),
    },
    passedCircle: {
        backgroundColor: '#4CAF50',
    },
    failedCircle: {
        backgroundColor: '#FF6B6B',
    },
    percentageText: {
        fontSize: scaleFont(42),
        fontWeight: 'bold',
        color: '#fff',
    },
    scoreResultText: {
        fontSize: scaleFont(18),
        color: '#666',
        marginBottom: moderateScale(20),
    },
    celebrationText: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: '#4CAF50',
        marginBottom: moderateScale(10),
    },
    tryAgainText: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: '#FFA500',
        marginBottom: moderateScale(10),
    },
    resultMessage: {
        fontSize: scaleFont(16),
        color: '#666',
        textAlign: 'center',
        lineHeight: scaleFont(24),
    },
    resultsControls: {
        padding: moderateScale(20),
        gap: moderateScale(15),
    },
    playAgainButton: {
        backgroundColor: '#8B4CD8',
        paddingVertical: moderateScale(15),
        borderRadius: moderateScale(25),
        alignItems: 'center',
    },
    playAgainButtonText: {
        color: '#fff',
        fontSize: scaleFont(18),
        fontWeight: 'bold',
    },
    nextSectionButton: {
        paddingVertical: moderateScale(15),
        alignItems: 'center',
    },
    nextSectionButtonText: {
        color: '#8B4CD8',
        fontSize: scaleFont(16),
    },
});
