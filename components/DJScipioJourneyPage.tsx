import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface DJScipioJourneyPageProps {
    pageNumber: number;
}

export default function DJScipioJourneyPage({ pageNumber }: DJScipioJourneyPageProps) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.headerSection}>
                    <Text style={styles.heading}>HIP-HOP TIME CAPSULE</Text>
                    <Text style={styles.subheading}>Document Your Personal Journey</Text>
                </View>

                {/* Center Text */}
                <View style={styles.centerSection}>
                    <Text style={styles.centerName}>DJ SCIPIO</Text>
                    <Text style={styles.centerJourney}>THIS IS MY JOURNEY</Text>
                </View>

                <View style={styles.bottomSpacer} />
            </View>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerSection: {
        paddingTop: moderateScale(50),
        paddingHorizontal: moderateScale(20),
        alignItems: 'center',
    },
    heading: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        letterSpacing: 1,
    },
    subheading: {
        fontSize: scaleFont(16),
        fontStyle: 'italic',
        color: colors.accent,
        textAlign: 'center',
        marginTop: moderateScale(8),
    },
    centerSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(30),
    },
    centerName: {
        fontSize: scaleFont(28),
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: moderateScale(10),
    },
    centerJourney: {
        fontSize: scaleFont(22),
        fontWeight: '600',
        color: colors.primary,
        textAlign: 'center',
    },
    bottomSpacer: {
        height: moderateScale(60),
    },
});
