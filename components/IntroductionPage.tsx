import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPageProps {
    pageNumber: number;
}

export default function IntroductionPage({ pageNumber }: IntroductionPageProps) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={styles.musicNote}>🎵</Text>
                        <Text style={styles.title}>INTRODUCTION</Text>
                        <Text style={styles.musicNote}>🎵</Text>
                    </View>

                    <View style={styles.decorativeLine} />

                    <Text style={styles.subtitle}>
                        Hip-Hop Time Capsule: Document Your Personal Journey celebrates over 50 years of Hip-Hop music, culture, and influence.
                    </Text>

                    <Text style={styles.bodyText}>
                        Hi. My name is Anita Scipio, and my brother DJ SCIPIO and I are the authors of this book. I am a former receptionist for eighteen years at iHeartMedia New York. I have been a fan of Rap and Hip-Hop since 1978, and it has a very special place in my life.
                    </Text>

                    <Text style={styles.bodyText}>
                        On August 12, 2023, my family and I attended the epic Hip-Hop 50 Live Concert at Yankee Stadium! It was an unforgettable experience; we honestly had the time of our lives.
                    </Text>

                    <Text style={styles.bodyText}>
                        A few days later, I believe God gave me an epiphany. I couldn't stop thinking about the tens of thousands of people in that stadium, all sharing the same joy and excitement. Each has a story about Hip-Hop—what it means to them and what brought them out on that historic night.
                    </Text>

                    <Text style={styles.bodyText}>
                        I thought, "Those memories and personal journeys must be cherished and preserved; what questions can I provide that could prompt them to describe how Hip-Hop influenced their lives"?
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(30),
        paddingTop: moderateScale(40),
        paddingBottom: moderateScale(60),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(15),
    },
    musicNote: {
        fontSize: scaleFont(24),
        marginHorizontal: moderateScale(15),
        color: colors.accent,
    },
    title: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
        letterSpacing: 1,
    },
    decorativeLine: {
        alignSelf: 'center',
        width: getResponsiveValue(200, 240, 280, 320),
        height: moderateScale(3),
        backgroundColor: colors.accent,
        marginBottom: moderateScale(30),
        borderRadius: 1.5,
    },
    subtitle: {
        fontSize: scaleFont(16),
        fontWeight: '600',
        color: '#000',
        marginBottom: moderateScale(25),
        textAlign: 'justify',
        lineHeight: scaleFont(22),
    },
    bodyText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        marginBottom: moderateScale(20),
        textAlign: 'justify',
    },
});
