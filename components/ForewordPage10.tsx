import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';

interface ForewordPage10Props {
    pageNumber: number;
}

export default function ForewordPage10({ pageNumber }: ForewordPage10Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        their importance, particularly in helping the younger generation grasp their cultural significance.
                    </Text>

                    <Text style={styles.bodyText}>
                        Here is my end of the bargain. "Hip-Hop originated from the streets, and fashion, including hats, became a visual representation of the street culture. Artists like Kool Moe Dee popularized hats, turning them into recognizable symbols of the genre. See his own words below.
                    </Text>

                    <Text style={styles.quoteText}>
                        "As Kool Moe Dee, my hats were more than just fashion; they were my trademark. My choice of headwear became a symbol of empowerment. While on the surface, one might think it is just about being or looking cool. However, on a deeper level, I believe our subconscious being is and always has been trying to get back to Africa. Without any prompting, at twelve years old, I started wearing hats. By the time I was fourteen, with little to no money, I had a hat in every color to match every outfit I owned. I would say the hat actually represents our desires to be kings and queens, subconsciously, of course. It's why I immediately connected with Queen Latifah. She overtly claimed her Queenship right up to her crown. So, when you look at MCs in hats, remember, for most of us, it's a physical metaphor for our version of an African crown. At least, that was the case for me; it was always deeper than just a hat to me."
                    </Text>

                    <Text style={styles.bodyText}>
                        In summary, hats in the early days of Hip-Hop were not merely accessories; they served as symbols of identity, style, and a cultural movement. The fashion choices made by Hip-Hop artists during this era had a lasting impact on the broader fashion landscape and continues
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
    quoteText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        marginBottom: moderateScale(20),
        textAlign: 'justify',
        fontStyle: 'italic',
        paddingHorizontal: moderateScale(10),
    },
    pageNumber: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(30),
    },
});
