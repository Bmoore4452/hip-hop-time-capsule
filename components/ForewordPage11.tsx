import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface ForewordPage11Props {
    pageNumber: number;
}

export default function ForewordPage11({ pageNumber }: ForewordPage11Props) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        to influence trends today.
                    </Text>

                    <Text style={styles.bodyText}>
                        I hope you found this brief summary informative and that it provided insightful information regarding the role of hats in the early days of Hip-Hop.
                    </Text>

                    <Text style={styles.signatureText}>
                        <Text style={styles.italicText1}>"You can thank me later." Sincerely, Anita :)</Text>
                    </Text>

                    <Text style={styles.funFactTitle}>
                        <Text style={styles.italicText2}>Fun Fact: On the cover of Hip-Hop Time{'\n'}Capsule... there are four hats and one crown.{'\n'}Below are the artists that are</Text>
                    </Text>

                    <View style={styles.artistsList}>
                        <View style={styles.artistItem}>
                            <Text style={styles.artistLabel}>The Crown: <Text style={styles.boldText}>The Notorious B.I.G.</Text></Text>
                            <View style={styles.underline} />
                        </View>

                        <View style={styles.artistItem}>
                            <Text style={styles.artistLabel}>The black Fedora: <Text style={styles.boldText}>RUN-DMC</Text></Text>
                            <View style={styles.underline} />
                        </View>

                        <View style={styles.artistItem}>
                            <Text style={styles.artistLabel}>The yellow-gold Kufi-Style Crown Hat: <Text style={styles.boldText}>Queen Latifah</Text></Text>
                            <View style={styles.underline} />
                        </View>

                        <View style={styles.artistItem}>
                            <Text style={styles.artistLabel}>The red Kangol: <Text style={styles.boldText}>LL Cool J</Text></Text>
                            <View style={styles.underline} />
                        </View>

                        <View style={styles.artistItem}>
                            <Text style={styles.artistLabel}>The black leather flat top Kufi: <Text style={styles.boldText}>Kool Moe Dee</Text></Text>
                            <View style={styles.underline} />
                        </View>
                    </View>
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
    bodyText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        marginBottom: moderateScale(20),
        textAlign: 'justify',
    },
    signatureText: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(24),
        color: '#000',
        marginBottom: moderateScale(30),
        textAlign: 'center',
    },
    italicText1: {
        fontStyle: 'italic',
        color: colors.primary,
    },
    italicText2: {
        fontStyle: 'italic',
        color: colors.accent,
    },
    funFactTitle: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(18),
        color: '#000',
        textAlign: 'center',
        marginBottom: moderateScale(25),
        fontWeight: '500',
    },
    artistsList: {
        marginBottom: moderateScale(30),
    },
    artistItem: {
        marginBottom: moderateScale(15),
    },
    artistLabel: {
        fontSize: scaleFont(14),
        color: '#000',
        lineHeight: scaleFont(18),
    },
    boldText: {
        fontWeight: 'bold',
        color: colors.primary,
    },
    underline: {
        height: 1,
        backgroundColor: '#000',
        marginTop: moderateScale(2),
    },
    pageNumber: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(30),
    },
});
