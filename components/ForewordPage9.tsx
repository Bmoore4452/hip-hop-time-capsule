import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';

interface ForewordPage9Props {
    pageNumber: number;
}

export default function ForewordPage9({ pageNumber }: ForewordPage9Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Kool Moe Dee: Hats</Text>

                    <View style={styles.imagesContainer}>
                        <View style={styles.imagePlaceholder} />
                        <View style={styles.imagePlaceholder} />
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
    },
    contentContainer: {
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 60,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    imagePlaceholder: {
        width: 140,
        height: 180,
        backgroundColor: '#ddd',
        borderRadius: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 10,
    },
    decorativeLine: {
        alignSelf: 'center',
        width: 200,
        height: 3,
        backgroundColor: '#000',
        marginBottom: 25,
        borderRadius: 1.5,
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#000',
        marginBottom: 20,
        textAlign: 'justify',
    },
    italicText: {
        fontStyle: 'italic',
    },
    pageNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 30,
    },
});
