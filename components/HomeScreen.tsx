/**
 * Main Home Screen
 * Entry point with options to read book, sign in, or view settings
 */

import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DemoSignInButton from './DemoSignInButton';
import { getCurrentUser, isAuthenticated } from '../utils/auth';
import { loadAllPageResponses } from '../utils/supabaseStorage';

const { width, height } = Dimensions.get('window');

interface HomeScreenProps {
    onStartReading: () => void;
}

export default function HomeScreen({ onStartReading }: HomeScreenProps) {
    const [user, setUser] = useState<any>(null);
    const [isAuth, setIsAuth] = useState(false);
    const [responsesCount, setResponsesCount] = useState(0);

    useEffect(() => {
        checkAuthAndLoadData();
    }, []);

    const checkAuthAndLoadData = async () => {
        const authenticated = await isAuthenticated();
        setIsAuth(authenticated);

        if (authenticated) {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
        }

        // Load saved responses count
        const responses = await loadAllPageResponses();
        setResponsesCount(responses.length);
    };

    const handleSignInSuccess = () => {
        checkAuthAndLoadData();
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1a1a2e', '#16213e', '#0f3460']}
                style={styles.gradient}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>Hip Hop</Text>
                        <Text style={styles.subtitle}>Time Capsule</Text>
                        <View style={styles.divider} />
                    </View>

                    {/* Welcome Section */}
                    <View style={styles.welcomeSection}>
                        {isAuth && user ? (
                            <>
                                <Text style={styles.welcomeText}>Welcome back!</Text>
                                <Text style={styles.userEmail}>{user.email || user.user_metadata?.name}</Text>
                            </>
                        ) : (
                            <Text style={styles.welcomeText}>Welcome to your journey</Text>
                        )}
                    </View>

                    {/* Progress Card */}
                    {responsesCount > 0 && (
                        <View style={styles.progressCard}>
                            <Text style={styles.progressTitle}>Your Progress</Text>
                            <Text style={styles.progressCount}>{responsesCount}</Text>
                            <Text style={styles.progressLabel}>pages completed</Text>
                        </View>
                    )}

                    {/* Main Action Button */}
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={onStartReading}
                        activeOpacity={0.8}
                    >
                        <LinearGradient
                            colors={['#e94560', '#d63447']}
                            style={styles.buttonGradient}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Text style={styles.startButtonText}>
                                {responsesCount > 0 ? '📖 Continue Reading' : '📖 Start Your Journey'}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* Auth Section */}
                    <View style={styles.authSection}>
                        <Text style={styles.authTitle}>
                            {isAuth ? 'Account' : 'Save Your Progress'}
                        </Text>
                        <Text style={styles.authSubtitle}>
                            {isAuth
                                ? 'Your journey is saved and synced'
                                : 'Sign in to sync across devices'}
                        </Text>
                        <DemoSignInButton onSignInSuccess={handleSignInSuccess} />
                    </View>

                    {/* Features */}
                    <View style={styles.featuresSection}>
                        <FeatureItem
                            icon="✨"
                            title="Interactive Experience"
                            description="Fill in your personal hip-hop story"
                        />
                        <FeatureItem
                            icon="☁️"
                            title="Cloud Sync"
                            description="Access your journey from any device"
                        />
                        <FeatureItem
                            icon="🔒"
                            title="Private & Secure"
                            description="Your story is yours alone"
                        />
                    </View>

                    {/* Footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            A personalized journey through hip-hop history
                        </Text>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    );
}

interface FeatureItemProps {
    icon: string;
    title: string;
    description: string;
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
        <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>{icon}</Text>
            <View style={styles.featureText}>
                <Text style={styles.featureTitle}>{title}</Text>
                <Text style={styles.featureDescription}>{description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        flex: 1,
    },
    scrollContent: {
        paddingVertical: 60,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 2,
    },
    subtitle: {
        fontSize: 24,
        color: '#e94560',
        textAlign: 'center',
        fontWeight: '600',
        marginTop: 5,
    },
    divider: {
        width: 60,
        height: 3,
        backgroundColor: '#e94560',
        marginTop: 15,
        borderRadius: 2,
    },
    welcomeSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    welcomeText: {
        fontSize: 18,
        color: '#fff',
        opacity: 0.9,
        textAlign: 'center',
    },
    userEmail: {
        fontSize: 14,
        color: '#e94560',
        marginTop: 5,
        fontWeight: '500',
    },
    progressCard: {
        backgroundColor: 'rgba(233, 69, 96, 0.15)',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'rgba(233, 69, 96, 0.3)',
        width: width - 40,
    },
    progressTitle: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    progressCount: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#e94560',
        marginBottom: 5,
    },
    progressLabel: {
        fontSize: 16,
        color: '#fff',
        opacity: 0.7,
    },
    startButton: {
        width: width - 40,
        marginBottom: 40,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#e94560',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    buttonGradient: {
        paddingVertical: 18,
        alignItems: 'center',
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 0.5,
    },
    authSection: {
        width: width - 40,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: 16,
        padding: 25,
        marginBottom: 30,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    authTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
        textAlign: 'center',
    },
    authSubtitle: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.7,
        marginBottom: 20,
        textAlign: 'center',
    },
    featuresSection: {
        width: width - 40,
        marginBottom: 30,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: 15,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    featureIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    featureText: {
        flex: 1,
    },
    featureTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 3,
    },
    featureDescription: {
        fontSize: 13,
        color: '#fff',
        opacity: 0.7,
    },
    footer: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 40,
    },
    footerText: {
        fontSize: 12,
        color: '#fff',
        opacity: 0.5,
        textAlign: 'center',
    },
});
