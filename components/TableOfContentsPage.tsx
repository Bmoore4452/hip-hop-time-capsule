import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';

interface TableOfContentsPageProps {
    pageNumber: number;
}

export default function TableOfContentsPage({ pageNumber }: TableOfContentsPageProps) {
    const tableOfContentsData = [
        { number: 1, title: "Title Page", page: 1 },
        { number: 2, title: "Autograph Page", page: 3 },
        { number: 3, title: "Copyright Page", page: 4 },
        { number: 4, title: "Table of Contents", page: 5 },
        { number: 5, title: "Foreword", page: 7 },
        { number: 6, title: "Kool Moe Dee Hats", page: 9 },
        { number: 7, title: "Introduction", page: 12 },
        { number: 8, title: "Anita's Dedication", page: 21 },
        { number: 9, title: "Hilton's Dedication", page: 22 },
        { number: 10, title: "Document Your Personal Journey: Questions", page: 23 },
        { number: 11, title: "Bonus 50 Hip-Hop Quotes", page: 76 },
        { number: 12, title: "Bonus Trivia Questions & Answers (1-25)", page: 81 },
        { number: 13, title: "Bonus Trivia Questions & Answers (26-50)", page: 89 },
        { number: 14, title: "DJ SCIPIO: My Journey", page: 91 },
        { number: 15, title: "Anita Scipio: My Journey and Flowers for HOT 97.FM", page: 143 },
        { number: 16, title: "Anita: Thank Yous", page: 214 },
        { number: 17, title: "Way Up With Angela Yee", page: 220 },
        { number: 18, title: "My Recent Visit To The Breakfast Club", page: 221 },
        { number: 19, title: "Anita: Shout-Outs", page: 243 },
        { number: 20, title: "It's All Love", page: 253 },
        { number: 21, title: "Sharin' The Love", page: 256 },
        { number: 22, title: "DJ SCIPIO: Thank Yous", page: 264 },
        { number: 23, title: "DJ SCIPIO: Shout-Outs", page: 266 },
        { number: 24, title: "About The Author: Hilton Scipio", page: 272 },
        { number: 25, title: "About The Author: Anita Scipio", page: 274 },
        { number: 26, title: "HHTC: The Breakfast Club & Way Up With Angela Yee", page: 276 },
        { number: 27, title: "Thank you/Celebrity Photos", page: 277 },
        { number: 28, title: "Anita Retires From iHeartMedia", page: 282 },
        { number: 29, title: "Heartfelt Wishes", page: 283 },
        { number: 30, title: "Anita & Hilton: Love, and Blessings.", page: 284 },
    ];

    return (
        <SafeAreaWrapper backgroundColor="#4555b9">
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>TABLE OF CONTENTS</Text>

                    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                        <View style={styles.entriesContainer}>
                            {tableOfContentsData.map((item) => (
                                <View key={item.number} style={styles.entryRow}>
                                    <View style={styles.entryLeft}>
                                        <Text style={styles.entryNumber}>{item.number}</Text>
                                        <Text style={styles.entryTitle}>{item.title}</Text>
                                    </View>
                                    <Text style={styles.pageNumber}>{item.page}</Text>
                                </View>
                            ))}
                        </View>

                        <View style={styles.noteContainer}>
                            <Text style={styles.noteText}>
                                Note: The first three pages are not usually listed but the automatic numbering system I am using, will not allow for any exclusions.
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        textDecorationLine: 'underline',
        color: '#000',
    },
    scrollContainer: {
        flex: 1,
    },
    entriesContainer: {
        paddingBottom: 20,
    },
    entryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
        paddingRight: 10,
    },
    entryLeft: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
    },
    entryNumber: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        width: 25,
        marginRight: 10,
    },
    entryTitle: {
        fontSize: 14,
        color: '#000',
        flex: 1,
        lineHeight: 18,
    },
    pageNumber: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        minWidth: 30,
        textAlign: 'right',
    },
    noteContainer: {
        marginTop: 20,
        paddingTop: 20,
    },
    noteText: {
        fontSize: 11,
        color: '#666',
        fontStyle: 'italic',
        lineHeight: 16,
    },
    bottomPageNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },
});
