import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions } from 'react-native';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

const { width } = Dimensions.get('window');

interface NavigationHintProps {
    visible: boolean;
    onHide?: () => void;
}

const NavigationHint: React.FC<NavigationHintProps> = ({ visible, onHide }) => {
    const [fadeAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        if (visible) {
            // Fade in
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start();

            // Auto hide after 4 seconds
            const timer = setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true,
                }).start(() => {
                    if (onHide) onHide();
                });
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [visible, fadeAnim, onHide]);

    if (!visible) return null;

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <View style={styles.hintBox}>
                <Text style={styles.hintTitle}>Navigation Guide</Text>
                <View style={styles.hintItem}>
                    <Text style={styles.hintIcon}>👈 👉</Text>
                    <Text style={styles.hintText}>Swipe left/right to navigate</Text>
                </View>
                <View style={styles.hintItem}>
                    <Text style={styles.hintIcon}>👆</Text>
                    <Text style={styles.hintText}>Tap sides to navigate or center to toggle controls</Text>
                </View>
                <View style={styles.hintItem}>
                    <Text style={styles.hintIcon}>🎯</Text>
                    <Text style={styles.hintText}>Use the navigation buttons below</Text>
                </View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 2000,
    },
    hintBox: {
        backgroundColor: colors.background,
        borderRadius: moderateScale(20),
        padding: moderateScale(25),
        maxWidth: width * 0.85,
        borderWidth: 2,
        borderColor: colors.accent,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
    },
    hintTitle: {
        fontSize: scaleFont(20),
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: moderateScale(20),
    },
    hintItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(15),
    },
    hintIcon: {
        fontSize: scaleFont(18),
        marginRight: moderateScale(15),
        width: moderateScale(30),
    },
    hintText: {
        fontSize: scaleFont(14),
        color: colors.text,
        flex: 1,
        lineHeight: scaleFont(18),
    },
});

export default NavigationHint;