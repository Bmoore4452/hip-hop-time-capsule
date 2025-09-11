import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';

interface IntroductionPage16Props {
    pageNumber: number;
}

export default function IntroductionPage16({ pageNumber }: IntroductionPage16Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        views. Again, while not every song is represented, these highlights capture the essence of our personal journey, transforming this journal/book into an interactive adventure that provides instant access to the raw and unaltered creativity and cultural impact that has made Hip-Hop the amazing and transformative art form it is today. Please keep in mind that most songs are:
                    </Text>

                    <Text style={styles.warningText}>
                        NOT SUITABLE FOR ALL AUDIENCES!
                    </Text>

                    <Text style={styles.bodyText}>
                        <Text style={styles.boldText}>NOTE:</Text> After making several inquiries with knowledgeable sources regarding the legality of QR Code linking, the consensus was, "Since you're linking to the artists' official websites, labels, networks, or YouTube channels, copyright concerns are minimized because you're not hosting or reproducing their content." I hope everyone concerned feels the same way, and if not, measures will be taken to meet with their approval.
                    </Text>

                    <Text style={styles.footnoteText}>
                        *Other than a few exceptions, where the original track by the artist is unavailable, all efforts have been made to see that those guidelines have been followed.
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Two More Great Things About...
                    </Text>

                    <Text style={styles.bookTitle}>
                        HIP-HOP TIME CAPSULE: DOCUMENT YOUR PERSONAL JOURNEY
                    </Text>

                    <Text style={styles.bodyText}>
                        When I first envisioned this journal/book, the plan included 100 prompt questions, 50 trivia questions with answers, 50
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
    warningText: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: moderateScale(20),
        letterSpacing: 1,
    },
    footnoteText: {
        fontSize: scaleFont(12),
        lineHeight: scaleFont(18),
        color: '#000',
        marginBottom: moderateScale(20),
        textAlign: 'justify',
        fontStyle: 'italic',
    },
    sectionTitle: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: moderateScale(25),
    },
    bookTitle: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: moderateScale(25),
        letterSpacing: 0.5,
    },
});
