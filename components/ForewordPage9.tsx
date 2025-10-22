import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';


interface ForewordPage9Props {
    pageNumber: number;
}

export default function ForewordPage9({ pageNumber }: ForewordPage9Props) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Kool Moe Dee: Hats</Text>

                    <View style={styles.imagesContainer}>
                        <Image source={require('../assets/kool-moe-dee.jpg')} style={styles.imagePlaceholder} />
                        <Image source={require('../assets/kool-moe-dee2.jpg')} style={styles.imagePlaceholder} />

                    </View>

                    <Text style={styles.subtitle}>Kool Moe Dee</Text>
                    <View style={styles.decorativeLine} />

                    <Text style={styles.bodyText}>
                        Kool Moe Dee is a pioneering rapper and Hip-Hop artist known for his contributions to the genre, beginning in 1977. He was leader of the influential Hip-Hop group, <Text style={styles.italicText}>Treacherous Three</Text> founded in 1978. They made their first record by the name of "<Text style={styles.italicText}>The New Rap Language</Text>" in 1980. He later gained further prominence as a solo artist. Kool Moe Dee was recognized for his intricate rhyme patterns, complex lyrics, and his ability to engage in lyrical battles. He was also noted for his love of hats. I approached Kool Moe Dee and asked him to write the foreword for our book. He graciously agreed to do so. However, he expressed a specific condition: he wanted me to emphasize the significance of hats in Hip-Hop. As hats were his trademark, he believed it was crucial to convey
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
    title: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
        marginBottom: moderateScale(20),
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(20),
        paddingHorizontal: moderateScale(10),
    },
    imagePlaceholder: {
        width: getResponsiveValue(120, 140, 160, 180),
        height: getResponsiveValue(150, 180, 200, 220),
        backgroundColor: '#ddd',
        borderRadius: 8,
    },
    subtitle: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.primary,
        marginBottom: moderateScale(10),
    },
    decorativeLine: {
        alignSelf: 'center',
        width: getResponsiveValue(150, 180, 200, 250),
        height: moderateScale(3),
        backgroundColor: colors.accent,
        marginBottom: moderateScale(25),
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
    },
    pageNumber: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(30),
    },
});
