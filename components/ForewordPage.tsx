import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface ForewordPageProps {
    pageNumber: number;
}

export default function ForewordPage({ pageNumber }: ForewordPageProps) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Foreword</Text>
                    <View style={styles.decorativeLine} />

                    <Text style={styles.bodyText}>
                        Hip-Hop isn't just a genre; it's a living, breathing testament to a culture that has woven itself into the fabric of society. Our community's stories, struggles, and triumphs lie within its rhythms, rhymes, and shared experiences.
                    </Text>

                    <Text style={styles.bodyText}>
                        <Text style={styles.italicText}>Hip-Hop Time Capsule: Document Your Personal Journey</Text>, co-authored by Anita Scipio and her brother, Hilton V. Scipio, also known professionally as DJ SCIPIO, encourages you to document your undeniable reality, your truths, joyful experiences, and undying love for Hip-Hop. As a pioneer immersed in this movement, I witnessed firsthand the evolution of Hip-Hop and its rise from humble beginnings to a global powerhouse. My journey intertwined with individuals like my former classmate and friend, Hilton Scipio, created a tapestry of shared music and experiences that helped enrich our lives. With over 45 years of crafting mixtapes, collaborating closely with label reps, and offering an invaluable platform for emerging artists to shine, DJ SCIPIO has established a strong foothold in the Hip-Hop industry in 'The Carolinas' and beyond.
                    </Text>

                    <Text style={styles.bodyText}>
                        Hip-Hop's heartbeat doesn't solely resonate through artists and performers – it thrives in the tales, spun by individuals like Anita Scipio. Her unwavering commitment, nurtured over nearly two decades as the receptionist at iHeartMedia, has intertwined her life with many of the greatest Hip-Hop and Rap artists on the planet.
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
    title: {
        fontSize: scaleFont(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
        marginBottom: moderateScale(15),
    },
    decorativeLine: {
        alignSelf: 'center',
        width: getResponsiveValue(150, 180, 200, 250),
        height: moderateScale(3),
        backgroundColor: colors.accent,
        marginBottom: moderateScale(30),
        borderRadius: 1.5,
    },
    bodyText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        marginBottom: moderateScale(20),
        textAlign: 'justify',
    },
    italicText: {
        fontStyle: 'italic',
        fontWeight: '500',
    },
    pageNumber: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(30),
    },
});
