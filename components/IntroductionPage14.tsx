import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPage14Props {
    pageNumber: number;
}

export default function IntroductionPage14({ pageNumber }: IntroductionPage14Props) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        100 thought-provoking questions to guide you along the way. I am proud to say that there is no other journal/book like this on the market today."
                    </Text>

                    <Text style={styles.bodyText}>
                        Writing this book was both a labor of love and a very challenging journey. The process was far from easy, from grappling with the immense scope of Hip-Hop's 50-year history, even on the most basic level, to attempting to provide authentic and meaningful information as well as our personal opinions.
                    </Text>

                    <Text style={styles.bodyText}>
                        As a bonus, I included 50 timeless and inspiring quotes from our Rap/Hip-Hop artists and 50 trivia questions and answers to challenge and celebrate your knowledge of the genre.
                    </Text>

                    <Text style={styles.bodyText}>
                        Along the way, numerous setbacks—both big and small—delayed this book's release, whether it was refining the concept more times than I care to admit, navigating unexpected hurdles, an illegitimate editor who set us back for months, a few unreliable people who didn't come through as promised, or simply striving to do justice to the culture. However, every challenge reinforced our commitment to creating something worthy of Hip-Hop, and I humbly believe that we have done just that.
                    </Text>

                    <Text style={styles.bodyText}>
                        It's been great working with my brother, Hilton, aka DJ SCIPIO, and benefitting from his insights and experience.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
});
