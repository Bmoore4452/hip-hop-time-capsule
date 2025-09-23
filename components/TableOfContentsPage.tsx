import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

const { width } = Dimensions.get('window');

interface TableOfContentsPageProps {
    pageNumber: number;
    onNavigateNext?: () => void;
    onNavigatePrevious?: () => void;
}

export default function TableOfContentsPage({ pageNumber, onNavigateNext, onNavigatePrevious }: TableOfContentsPageProps) {
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
    ];

    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <View style={styles.container}>
                {/* Left navigation zone */}
                <TouchableOpacity
                    style={styles.leftNavZone}
                    onPress={onNavigatePrevious}
                    activeOpacity={0}
                />

                {/* Right navigation zone */}
                <TouchableOpacity
                    style={styles.rightNavZone}
                    onPress={onNavigateNext}
                    activeOpacity={0}
                />

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
                            <Text style={styles.continuedText}>
                                (Continued on next page)
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
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(40),
    },
    title: {
        fontSize: scaleFont(20),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: moderateScale(30),
        textDecorationLine: 'underline',
        color: colors.primary, // Use primary color from colors.ts
    },
    scrollContainer: {
        flex: 1,
    },
    entriesContainer: {
        paddingBottom: moderateScale(20),
    },
    entryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: moderateScale(12),
        paddingRight: moderateScale(10),
    },
    entryLeft: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-start',
    },
    entryNumber: {
        fontSize: scaleFont(14),
        fontWeight: 'bold',
        color: '#000',
        width: moderateScale(25),
        marginRight: moderateScale(10),
    },
    entryTitle: {
        fontSize: scaleFont(14),
        color: '#000',
        flex: 1,
        lineHeight: scaleFont(18),
    },
    pageNumber: {
        fontSize: scaleFont(14),
        fontWeight: 'bold',
        color: '#000',
        minWidth: moderateScale(30),
        textAlign: 'right',
    },
    noteContainer: {
        marginTop: moderateScale(20),
        paddingTop: moderateScale(20),
    },
    noteText: {
        fontSize: scaleFont(11),
        color: '#666',
        fontStyle: 'italic',
        lineHeight: scaleFont(16),
    },
    continuedText: {
        fontSize: scaleFont(12),
        color: '#4555b9',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: moderateScale(10),
    },
    bottomPageNumber: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(20),
    },
    leftNavZone: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: width * 0.15, // 15% of screen width for left nav zone
        zIndex: 10,
    },
    rightNavZone: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: width * 0.15, // 15% of screen width for right nav zone
        zIndex: 10,
    },
});
