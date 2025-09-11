import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';

interface IntroductionPage15Props {
    pageNumber: number;
}

export default function IntroductionPage15({ pageNumber }: IntroductionPage15Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        To enhance your experience, we have incorporated <Text style={styles.boldText}>235 selected QR codes</Text> throughout the book, and, this is the first time that has been done on a vast scale. We chose our most meaningful songs to highlight our experiences. These songs make the book a dynamic, engaging journey for readers, allowing them to immerse themselves in the music and learn something new about Hip-Hop history.
                    </Text>

                    <Text style={styles.bodyText}>
                        One of our goals in creating this book was to make it a family-friendly experience that teenagers and up could enjoy. Besides, I liked the idea of hearing the music the way I would while jamming at the front desk, and DJ Scipio liked the idea of giving his supporters and customers of his mixtapes the same family-friendly experience.
                    </Text>

                    <Text style={styles.bodyText}>
                        With that in mind, DJ Scipio and I initially hoped to use clean, radio-friendly versions of the tracks featured in the book. However, to avoid potential copyright infringement or to somehow not give the artists we love their just due, the codes, with very few exceptions, link directly to the original versions of the songs as the artists released them, and rightfully so.
                    </Text>

                    <Text style={styles.bodyText}>
                        This way, we can promote the artists and their work by directing readers to their official sites or platforms such as YouTube, bringing renewed attention to their music and supporting any benefits they may receive from streams and
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
    bodyText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        marginBottom: moderateScale(20),
        textAlign: 'justify',
    },
    boldText: {
        fontWeight: 'bold',
    },
});
