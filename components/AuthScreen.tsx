import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { useAuth } from '../contexts/AuthContext';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

type Mode = 'signIn' | 'signUp';

export default function AuthScreen() {
  const { signIn, signUp, skipLogin } = useAuth();
  const [mode, setMode] = useState<Mode>('signUp');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    setError(null);
    if (!email.trim() || !password) {
      setError('Please enter an email and password.');
      return;
    }
    if (mode === 'signUp' && !displayName.trim()) {
      setError('Please enter your name.');
      return;
    }
    setBusy(true);
    const err =
      mode === 'signIn'
        ? await signIn(email.trim(), password)
        : await signUp(email.trim(), password, displayName.trim());
    setBusy(false);
    if (err) setError(err);
  };

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>HIP-HOP TIME CAPSULE</Text>
          <Text style={styles.subtitle}>Document Your Personal Journey</Text>

          <Text style={styles.blurb}>
            {mode === 'signUp'
              ? 'Create a free account so the answers you write in this book are saved and waiting for you on any device.'
              : 'Welcome back! Sign in to pick up right where you left off.'}
          </Text>

          {mode === 'signUp' && (
            <TextInput
              style={styles.input}
              placeholder="Your name"
              placeholderTextColor="#999"
              value={displayName}
              onChangeText={setDisplayName}
              autoCapitalize="words"
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error && <Text style={styles.error}>{error}</Text>}

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={submit}
            disabled={busy}
            activeOpacity={0.8}
          >
            {busy ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.primaryButtonText}>
                {mode === 'signUp' ? 'Create Account' : 'Sign In'}
              </Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMode(mode === 'signUp' ? 'signIn' : 'signUp');
              setError(null);
            }}
          >
            <Text style={styles.switchText}>
              {mode === 'signUp'
                ? 'Already have an account? Sign in'
                : "New here? Create an account"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={skipLogin}>
            <Text style={styles.skipText}>
              Skip for now — read without saving
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(32),
    paddingVertical: moderateScale(40),
  },
  title: {
    fontSize: scaleFont(24),
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: scaleFont(14),
    fontStyle: 'italic',
    color: colors.accent,
    textAlign: 'center',
    marginTop: moderateScale(6),
    marginBottom: moderateScale(24),
  },
  blurb: {
    fontSize: scaleFont(13),
    lineHeight: scaleFont(19),
    color: '#333',
    textAlign: 'center',
    marginBottom: moderateScale(24),
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(12),
    fontSize: scaleFont(14),
    color: '#000',
    marginBottom: moderateScale(12),
  },
  error: {
    color: '#c0392b',
    fontSize: scaleFont(12.5),
    textAlign: 'center',
    marginBottom: moderateScale(10),
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(14),
    alignItems: 'center',
    marginTop: moderateScale(4),
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: scaleFont(15),
    fontWeight: 'bold',
  },
  switchText: {
    color: colors.primary,
    fontSize: scaleFont(13),
    textAlign: 'center',
    marginTop: moderateScale(18),
    fontWeight: '600',
  },
  skipText: {
    color: '#888',
    fontSize: scaleFont(12.5),
    textAlign: 'center',
    marginTop: moderateScale(14),
    textDecorationLine: 'underline',
  },
});
