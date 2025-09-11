import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';

interface ForewordPage8Props {
    pageNumber: number;
}

export default function ForewordPage8({ pageNumber }: ForewordPage8Props) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.bodyText}>
                        She shares her personal experiences and tales of her connections with the legends themselves. <Text style={styles.italicText}>Hip-Hop Time Capsule: Document Your Personal Journey</Text>, invites you to encapsulate your memories and Hip-Hop journey - along with the enclosed journey of both authors. Together, it establishes a treasury of memories and emotions that anchor us to this vibrant and dynamic culture.
                    </Text>

                    <Text style={styles.signatureText}>
                        <Text style={styles.italicText}>In Solidarity,</Text>{'\n'}
                        <Text style={styles.boldText}>Kool Moe Dee</Text>
                    </Text>

                    <Text style={styles.sectionTitle}>A Note From The Authors:</Text>

                    <Text style={styles.bodyText}>
                        Kool Moe Dee has been credited as the first Hip-Hop MC to battle another MC in an aggressive and direct approach, calling the MC out by name and ending in an epic takedown at Harlem World in 1981. That MC, a pioneer and celebrity in his own right, was Busy Bee Starski, known for his party-rocking style. This battle was historic yet controversial because it kickstarted personal attacks between MCs transitioning from lighthearted fun to serious lyrical competition. They are still friends and have a tremendous amount of respect for each other. Check out these QR codes to hear this historic battle.
                    </Text>

                    <View style={styles.qrCodesContainer}>
                        <View style={styles.qrCodeItem}>
                            <View style={styles.qrCodePlaceholder} />
                            <Text style={styles.qrCodeLabel}>The First Battle in Hip-Hop{'\n'}- Busy Bee vs Kool Moe Dee</Text>
                        </View>
                        <View style={styles.qrCodeItem}>
                            <View style={styles.qrCodePlaceholder} />
                            <Text style={styles.qrCodeLabel}>Beef 1 - Busy Bee vs{'\n'}Kool Moe Dee</Text>
                        </View>
                        <View style={styles.qrCodeItem}>
                            <View style={styles.qrCodePlaceholder} />
                            <Text style={styles.qrCodeLabel}>Kool Moe Dee{'\n'}Dissing Busy Bee (1981)</Text>
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
    italicText: {
        fontStyle: 'italic',
        fontWeight: '500',
    },
    signatureText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000',
        marginBottom: 30,
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginBottom: 20,
        textDecorationLine: 'underline',
    },
    qrCodesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    qrCodeItem: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    qrCodePlaceholder: {
        width: 80,
        height: 80,
        backgroundColor: '#000',
        marginBottom: 8,
    },
    qrCodeLabel: {
        fontSize: 10,
        textAlign: 'center',
        color: '#000',
        lineHeight: 12,
    },
    pageNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 30,
    },
});
