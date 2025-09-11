import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import SafeAreaWrapper from './SafeAreaWrapper';

interface ForewordPage8Props {
    pageNumber: number;
}

export default function ForewordPage8({ pageNumber }: ForewordPage8Props) {
    const qrCodeData = [
        {
            url: 'https://youtu.be/H1PplYSE07Q?si=QDoMyfHotMHduUpK',
            label: 'The First Battle in Hip-Hop\n- Busy Bee vs Kool Moe Dee'
        },
        {
            url: 'https://youtu.be/wipb37LGe4U?si=TOTnd98yLWq8f108',
            label: 'Beef 1 - Busy Bee vs\nKool Moe Dee'
        },
        {
            url: 'https://youtu.be/wu3_4lPIFBc?si=eV8EsHuu6IxsjZlo',
            label: 'Kool Moe Dee\nDissing Busy Bee (1981)'
        }
    ];

    const handleQRCodePress = (url: string) => {
        Linking.openURL(url);
    };
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
                        {qrCodeData.map((item, index) => (
                            <View key={index} style={styles.qrCodeItem}>
                                <TouchableOpacity
                                    onPress={() => handleQRCodePress(item.url)}
                                    style={styles.qrCodeTouchable}
                                >
                                    <QRCode
                                        value={item.url}
                                        size={80}
                                        color="black"
                                        backgroundColor="white"
                                    />
                                </TouchableOpacity>
                                <Text style={styles.qrCodeLabel}>{item.label}</Text>
                                <TouchableOpacity onPress={() => handleQRCodePress(item.url)}>
                                    <Text style={styles.linkText}>Tap to open video</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
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
    qrCodeTouchable: {
        marginBottom: 8,
        borderRadius: 4,
        overflow: 'hidden',
    },
    qrCodeLabel: {
        fontSize: 10,
        textAlign: 'center',
        color: '#000',
        lineHeight: 12,
        marginBottom: 5,
    },
    linkText: {
        fontSize: 9,
        color: '#4555b9',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: '500',
    },
    pageNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: 30,
    },
});
