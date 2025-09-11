import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';

interface IntroductionPage17Props {
    pageNumber: number;
}

export default function IntroductionPage17({ pageNumber }: IntroductionPage17Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        memorable quotes, and me and DJ SCIPIO's answers. However, as the project evolved, it was suggested by a very knowledgeable, trustworthy, and supportive friend that I weave in my 18 years of personal experiences with the Hip-Hop artists of the day, along with stories, pictures, and behind-the-scenes memories.
                    </Text>

                    <Text style={styles.bodyText}>
                        It was a great idea, and I enthusiastically made plans to start writing, re-editing, and re-writing this book. Months into the process, after finalizing what I felt was a richer and more in-depth project, I realized (with the advice and feedback of a few very important people in my life, that it had outgrown its original format and the main purpose of Hip-Hop fans documenting their own personal journey.
                    </Text>

                    <Text style={styles.sectionTitle}>
                        Why This book Became Two Volumes.
                    </Text>

                    <Text style={styles.bodyText}>
                        To make the project feasible, I split it into t parts. This first volume includes everything mentioned above, and the second volume, <Text style={styles.italicText}>Hip-Hop Time Capsule: The Next Chapter</Text>, will dive deeper into my stories, memories, and unique experiences with our Hip-Hop legends, my famous co-workers/the iHeart family. It will also feature QR codes that spotlight the artist's historical moments, new projects, and so much more!
                    </Text>

                    <Text style={styles.bodyText}>
                        That said, I would like to shout out my very knowledgeable, trustworthy, and supportive friend, Thea Mitchem, iHeartMedia's E.V.P. of Programming for the Northeast Division and Program Director of Power 105.1 New York.
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
    italicText: {
        fontStyle: 'italic',
        fontWeight: '500',
    },
    sectionTitle: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: moderateScale(25),
        textDecorationLine: 'underline',
    },
});
