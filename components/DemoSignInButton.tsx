/**
 * Demo Sign-In Component for Development
 * Shows a picker to select demo users for testing
 */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, ScrollView } from 'react-native';
import {
    isDemoMode,
    signInWithDemoUser,
    signOutDemoUser,
    getCurrentDemoUser,
    getDemoUsers,
    toggleDemoMode,
    type DemoUser
} from '../utils/demoAuth';
import { migrateAnonymousData } from '../utils/auth';

interface DemoSignInButtonProps {
    onSignInSuccess?: () => void;
    onSignInError?: (error: string) => void;
}

export default function DemoSignInButton({
    onSignInSuccess,
    onSignInError
}: DemoSignInButtonProps) {
    const [isDemo, setIsDemo] = useState(false);
    const [currentUser, setCurrentUser] = useState<DemoUser | null>(null);
    const [showPicker, setShowPicker] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkDemoStatus();
    }, []);

    const checkDemoStatus = async () => {
        const demoEnabled = await isDemoMode();
        setIsDemo(demoEnabled);

        if (demoEnabled) {
            const user = await getCurrentDemoUser();
            setCurrentUser(user);
        }
    };

    const handleSignIn = async (userId: string) => {
        setLoading(true);
        setShowPicker(false);

        try {
            const result = await signInWithDemoUser(userId);

            if (result.success && result.user) {
                // Migrate any anonymous data
                await migrateAnonymousData();

                setCurrentUser(result.user);
                Alert.alert(
                    '✅ Demo Sign In',
                    `Signed in as ${result.user.name}\n(${result.user.email})`,
                    [{ text: 'OK' }]
                );
                onSignInSuccess?.();
            } else {
                Alert.alert('Error', result.error || 'Failed to sign in');
                onSignInError?.(result.error || 'Unknown error');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        Alert.alert(
            'Sign Out',
            `Sign out ${currentUser?.name}?`,
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Sign Out',
                    style: 'destructive',
                    onPress: async () => {
                        await signOutDemoUser();
                        setCurrentUser(null);
                        Alert.alert('Signed Out', 'Demo user signed out');
                    },
                },
            ]
        );
    };

    const handleToggleDemo = async () => {
        const newState = await toggleDemoMode();
        setIsDemo(newState);
        setCurrentUser(null);

        Alert.alert(
            newState ? '🧪 Demo Mode Enabled' : '🔐 Production Mode',
            newState
                ? 'You can now use demo accounts for development'
                : 'Demo mode disabled. Use real Apple Sign-In.',
            [{ text: 'OK' }]
        );
    };

    if (!isDemo) {
        return (
            <TouchableOpacity
                style={styles.toggleButton}
                onPress={handleToggleDemo}
            >
                <Text style={styles.toggleButtonText}>🧪 Enable Demo Mode</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.demoBadge}>
                <Text style={styles.demoBadgeText}>🧪 DEMO MODE</Text>
            </View>

            {!currentUser ? (
                <TouchableOpacity
                    style={styles.signInButton}
                    onPress={() => setShowPicker(true)}
                    disabled={loading}
                >
                    <Text style={styles.signInButtonText}>
                        {loading ? 'Signing In...' : '👤 Sign In (Demo)'}
                    </Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>{currentUser.name}</Text>
                    <Text style={styles.userEmail}>{currentUser.email}</Text>
                    <TouchableOpacity
                        style={styles.signOutButton}
                        onPress={handleSignOut}
                    >
                        <Text style={styles.signOutButtonText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            )}

            <TouchableOpacity
                style={styles.disableButton}
                onPress={handleToggleDemo}
            >
                <Text style={styles.disableButtonText}>Switch to Production</Text>
            </TouchableOpacity>

            <Modal
                visible={showPicker}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setShowPicker(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select Demo User</Text>

                        <ScrollView style={styles.userList}>
                            {getDemoUsers().map((user) => (
                                <TouchableOpacity
                                    key={user.id}
                                    style={styles.userOption}
                                    onPress={() => handleSignIn(user.id)}
                                >
                                    <Text style={styles.userOptionName}>{user.name}</Text>
                                    <Text style={styles.userOptionEmail}>{user.email}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={() => setShowPicker(false)}
                        >
                            <Text style={styles.cancelButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        padding: 20,
    },
    demoBadge: {
        backgroundColor: '#FF9500',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        marginBottom: 15,
    },
    demoBadgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    signInButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 8,
        minWidth: 200,
        alignItems: 'center',
        marginBottom: 10,
    },
    signInButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    userInfo: {
        backgroundColor: '#f5f5f5',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 10,
        minWidth: 250,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    signOutButton: {
        backgroundColor: '#FF3B30',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 6,
    },
    signOutButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    toggleButton: {
        backgroundColor: '#FF9500',
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 8,
        marginVertical: 10,
    },
    toggleButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    disableButton: {
        backgroundColor: 'transparent',
        paddingVertical: 8,
        marginTop: 10,
    },
    disableButtonText: {
        color: '#007AFF',
        fontSize: 12,
        textDecorationLine: 'underline',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        width: '80%',
        maxWidth: 400,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    userList: {
        maxHeight: 300,
    },
    userOption: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    userOptionName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    userOptionEmail: {
        fontSize: 14,
        color: '#666',
    },
    cancelButton: {
        marginTop: 15,
        padding: 12,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
