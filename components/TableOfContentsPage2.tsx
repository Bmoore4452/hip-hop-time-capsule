import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

const { width } = Dimensions.get('window');

interface TableOfContentsPage2Props {
    pageNumber: number;
    onNavigateNext?: () => void;
    onNavigatePrevious?: () => void;
}

export default function TableOfContentsPage2({ pageNumber, onNavigateNext, onNavigatePrevious }: TableOfContentsPage2Props) {
    const tableOfContentsData = [
        { number: 24, title: "About The Author: Hilton Scipio", page: 272 },
        { number: 25, title: "About The Author: Anita Scipio", page: 274 },
        { number: 26, title: "HHTC: The Breakfast Club & Way Up With Angela Yee", page: 276 },
        { number: 27, title: "Thank you/Celebrity Photos", page: 277 },
        { number: 28, title: "Anita Retires From iHeartMedia", page: 282 },
        { number: 29, title: "Heartfelt Wishes", page: 283 },
        { number: 30, title: "Anita & Hilton: Love, and Blessings.", page: 284 },
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
                    <Text style={styles.subtitle}>(Continued)</Text>

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
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(40),
    },
    title: {
        fontSize: scaleFont(20),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: moderateScale(10),
        textDecorationLine: 'underline',
        color: colors.primary,
    },
    subtitle: {
        fontSize: scaleFont(16),
        textAlign: 'center',
        marginBottom: moderateScale(30),
        color: '#666',
        fontStyle: 'italic',
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
        width: width * 0.15,
        zIndex: 10,
    },
    rightNavZone: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: width * 0.15,
        zIndex: 10,
    },
});
