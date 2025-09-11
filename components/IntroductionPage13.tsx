import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';

interface IntroductionPage13Props {
    pageNumber: number;
}

export default function IntroductionPage13({ pageNumber }: IntroductionPage13Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        That was the simple catalyst for writing this hybrid journal/book, and I am happy to say there is currently nothing on the market like <Text style={styles.boldText}>"Hip-Hop Time Capsule: Document Your Personal Journey."</Text>
                    </Text>

                    <Text style={styles.bodyText}>
                        I'll be the first to admit that I'm not an expert. My historical knowledge of Hip-Hop is sufficient, but I make up for what I lack in expertise with an undeniable love and deep commitment to the genre. This book comes from the heart, written by a fan who appreciates the art, the artists, and the culture and was lucky enough to be right amid all the excitement and joy.
                    </Text>

                    <Text style={styles.bodyText}>
                        I am honored that I was able to bring my brother, DJ SCIPIO, on board with this project as my co-author. I love and know the music but needed to learn more about its origins and history. He is a well-informed Hip-Hop authority, and his 45 years of experience in the music industry have been invaluable. He has taught me so much about the golden age of Hip-Hop and Rap, as well as pioneers such as DJ Hollywood, Grandmaster Flowers, Disco King Mario, and the significant contributions of Cool Herc. I learned that Hip-Hop was influenced by gang culture, most notably the Black Spades in the Bronx, who played an important role in the foundation of the culture. He informed me that Hip-Hop was derived from various genres of music, i.e., jazz, funk, and soul.
                    </Text>

                    <Text style={styles.bodyText}>
                        His reputation as one of the best Mixtape DJs in the Carolinas and beyond has been solidified. Together, we have composed
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
