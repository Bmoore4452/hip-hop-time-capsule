import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';

interface IntroductionPage18Props {
    pageNumber: number;
}

export default function IntroductionPage18({ pageNumber }: IntroductionPage18Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        Many artists and short stories) are mentioned in this first book, but many more celebrities and <Text style={styles.italicText}>co-workers</Text> will be celebrated in 'The Next Chapter.'
                    </Text>

                    <Text style={styles.bodyText}>
                        This two-part approach allows us to fully honor the culture and the icons that we love so much (and for us to get some paper) :) while keeping the project affordable for everyone who loves Hip-Hop.
                    </Text>

                    <Text style={styles.bodyText}>
                        Thanks to Thea's suggestion, except for a cover, a new foreword by a new Hip-Hop legend, and a few edits, etc., I will have a new book, <Text style={styles.italicText}>this time in color</Text>, to offer in the near future.
                    </Text>

                    <Text style={styles.bodyText}>
                        As a sneak peek, here is a partial list of the legends and artists that not only shaped the culture but also left an unforgettable impression on my life and the lives of so many others. They will be featured AGAIN in the next book in a deeper and more personal level.
                    </Text>

                    <Text style={styles.finalSection}>
                        AND FINALLY...
                    </Text>

                    <Text style={styles.appAnnouncement}>
                        The Hip-Hop Time Capsule: Document Your Personal Journey app — created by my nephew, the innovative "One-Handed Producer" Brian Moore — will soon be available on Apple.
                    </Text>

                    <View style={styles.nextChapterHeader}>
                        <Text style={styles.musicNote}>🎵</Text>
                        <View style={styles.nextChapterTitleContainer}>
                            <Text style={styles.nextChapterTitle}>HIP-HOP TIME CAPSULE:</Text>
                            <Text style={styles.nextChapterSubtitle}>The Next Chapter</Text>
                            <Text style={styles.sneakPeek}>Sneak Peek...</Text>
                        </View>
                        <Text style={styles.musicNote}>🎵</Text>
                    </View>
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
    italicText: {
        fontStyle: 'italic',
        fontWeight: '500',
    },
    finalSection: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: moderateScale(25),
    },
    appAnnouncement: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        textAlign: 'center',
        marginBottom: moderateScale(30),
        fontStyle: 'italic',
    },
    nextChapterHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(30),
    },
    musicNote: {
        fontSize: scaleFont(24),
        marginHorizontal: moderateScale(15),
    },
    nextChapterTitleContainer: {
        alignItems: 'center',
    },
    nextChapterTitle: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        letterSpacing: 1,
    },
    nextChapterSubtitle: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(5),
    },
    sneakPeek: {
        fontSize: scaleFont(14),
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(10),
        fontStyle: 'italic',
    },
});
