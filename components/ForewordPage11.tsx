import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';

interface ForewordPage11Props {
    pageNumber: number;
}

export default function ForewordPage11({ pageNumber }: ForewordPage11Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        to influence trends today.
                    </Text>

                    <Text style={styles.bodyText}>
                        I hope you found this brief summary informative and that it provided insightful information regarding the role of hats in the early days of Hip-Hop.
                    </Text>

                    <Text style={styles.signatureText}>
                        <Text style={styles.italicText}>"You can thank me later." Sincerely, Anita :)</Text>
                    </Text>

                    <Text style={styles.funFactTitle}>
                        <Text style={styles.italicText}>Fun Fact: On the cover of Hip-Hop Time{'\n'}Capsule... there are four hats and one crown.{'\n'}Below are the artists that are</Text>
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
    },
    contentContainer: {
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 60,
    },
    bodyText: {
        fontSize: 14,
        lineHeight: 20,
        color: '#000',
        marginBottom: 20,
        textAlign: 'justify',
    },
    signatureText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
        marginBottom: 30,
        textAlign: 'center',
    },
    italicText: {
        fontStyle: 'italic',
    },
    funFactTitle: {
        fontSize: 14,
        lineHeight: 18,
        color: '#000',
        textAlign: 'center',
        marginBottom: 25,
        fontWeight: '500',
    },
    artistsList: {
        marginBottom: 30,
    },
    artistItem: {
        marginBottom: 15,
    },
    artistLabel: {
        fontSize: 14,
        color: '#000',
        lineHeight: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    underline: {
        height: 1,
        backgroundColor: '#000',
        marginTop: 2,
    },
    pageNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 30,
    },
});
