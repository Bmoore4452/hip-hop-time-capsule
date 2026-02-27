import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { moderateScale, scaleFont } from '../utils/responsive';
import { colors } from '../utils/colors';
import { getQuotesForPage } from '../utils/quotesData';

interface QuotesPageProps {
    pageNumber: number;
}

export default function QuotesPage({ pageNumber }: QuotesPageProps) {
    const quotes = getQuotesForPage(pageNumber);
    const isFirstPage = pageNumber === 76;

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header - only on page 76 */}
                    {isFirstPage && (
                        <View style={styles.headerContainer}>
                            <View style={styles.bonusBadge}>
                                <Text style={styles.bonusText}>BONUS</Text>
                            </View>
                            <Text style={styles.headerTitle}>50 Hip Hop Quotes</Text>
                        </View>
                    )}

                    {/* Quotes */}
                    {quotes.map((quote) => (
                        <View key={quote.number} style={styles.quoteContainer}>
                            <Text style={styles.quoteText}>
                                {quote.number}. "{quote.text}" <Text style={styles.authorText}>-{quote.author}</Text>
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(25),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(60),
        margin: moderateScale(20),
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(20),
        gap: moderateScale(10),
    },
    bonusBadge: {
        backgroundColor: colors.accent,
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(6),
        borderRadius: moderateScale(8),
        transform: [{ rotate: '-5deg' }],
    },
    bonusText: {
        color: '#fff',
        fontSize: scaleFont(14),
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    headerTitle: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: '#8B4CD8', // Cyan/turquoise color from the image
        fontStyle: 'italic',
    },
    quoteContainer: {
        marginBottom: moderateScale(16),
    },
    quoteText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(22),
        color: '#333',
        textAlign: 'left',
    },
    authorText: {
        fontWeight: 'bold',
        color: '#000',
    },
    pageNumberContainer: {
        position: 'absolute',
        bottom: moderateScale(20),
        alignSelf: 'center',
    },
    pageNumber: {
        fontSize: scaleFont(14),
        color: '#666',
    },
});
