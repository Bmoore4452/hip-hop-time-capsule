/**
 * Apple Sign-In button component
 * Displays native Apple Sign-In button with proper styling
 */

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native';
import AppleAuthentication from '@invertase/react-native-apple-authentication';
import { signInWithApple, isAppleSignInAvailable, isAuthenticated, signOut, migrateAnonymousData } from '../utils/auth';

interface AppleSignInButtonProps {
    onSignInSuccess?: () => void;
    onSignInError?: (error: string) => void;
}

export default function AppleSignInButton({
    onSignInSuccess,
    onSignInError
}: AppleSignInButtonProps) {
    const [isAvailable, setIsAvailable] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkAvailability();
        checkAuthStatus();
    }, []);

    const checkAvailability = async () => {
        const available = await isAppleSignInAvailable();
        setIsAvailable(available);
    };

    const checkAuthStatus = async () => {
        const authenticated = await isAuthenticated();
        setIsSignedIn(authenticated);
    };

    const handleSignIn = async () => {
        setLoading(true);

        try {
            const result = await signInWithApple();

            if (result.success) {
                // Migrate any anonymous data to the authenticated user
                await migrateAnonymousData();

                setIsSignedIn(true);
                Alert.alert('Success', 'Signed in with Apple successfully!');
                onSignInSuccess?.();
            } else {
                if (result.error !== 'Sign in was canceled') {
                    Alert.alert('Sign In Failed', result.error || 'An error occurred');
                    onSignInError?.(result.error || 'Unknown error');
                }
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSignOut = async () => {
        Alert.alert(
            'Sign Out',
            'Are you sure you want to sign out? Your data will remain saved.',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Sign Out',
                    style: 'destructive',
                    onPress: async () => {
                        await signOut();
                        setIsSignedIn(false);
                        Alert.alert('Signed Out', 'You have been signed out successfully');
                    },
                },
            ]
        );
    };

    // Only show on iOS 13+
    if (!isAvailable || Platform.OS !== 'ios') {
        return null;
    }

    return (
        <View style={styles.container}>
            {!isSignedIn ? (
                <AppleAuthentication.AppleAuthenticationButton
                    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                    cornerRadius={5}
                    style={styles.button}
                    onPress={handleSignIn}
                    disabled={loading}
                />
            ) : (
                <AppleAuthentication.AppleAuthenticationButton
                    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_OUT}
                    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                    cornerRadius={5}
                    style={styles.button}
                    onPress={handleSignOut}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    button: {
        width: 200,
        height: 44,
    },
});
