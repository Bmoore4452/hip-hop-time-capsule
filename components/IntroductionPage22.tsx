import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPage22Props {
    pageNumber: number;
}

export default function IntroductionPage22({ pageNumber }: IntroductionPage22Props) {
    const [fontsLoaded] = useFonts({
        GreatVibes_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>HILTON'S DEDICATION</Text>

                    {/* Photo section */}
                    <View style={styles.photosContainer}>
                        <View style={styles.photoFrame}>
                            <Image
                                source={require('../assets/KLW-left.png')}
                                style={styles.photo}
                            />
                        </View>
                        <View style={styles.photoFrame}>
                            <Image
                                source={require('../assets/CNW-right.png')}
                                style={styles.photo}
                            />
                        </View>
                    </View>

                    <Text style={styles.dedicationText}>
                        To my dear daughter, <Text style={styles.boldText}>Cheri Scipio-White</Text>, and my cherished granddaughters, <Text style={styles.boldText}>Kadence L. White</Text> and <Text style={styles.boldText}>Chloe N. White</Text>, and my late son, <Text style={styles.boldText}>Hilton Fuquan Scipio (RIP)</Text>... I dedicate this book to you. You fill my life with love and happiness. I hope this book will always remind you of my love and dedication to you and our family. Included in this book, are memories of my own Hip-Hop journey and how it impacted my life and career. I am so proud of each of you and I hope my journey will inspire you to always be yourself, follow your heart and remember the love and legacy that we will share forever.
                    </Text>

                    <View style={styles.signatureContainer}>
                        <Image
                            source={require('../assets/flowers-left.png')}
                            style={styles.flowerIcon}
                        />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.signature}>With all my love,</Text>
                            <Text style={styles.signature}>Dad/Papa Scipio</Text>
                        </View>
                        <Image
                            source={require('../assets/dove-right.png')}
                            style={styles.doveIcon}
                        />
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
        alignItems: 'center',
    },
    title: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: colors.primary,
        textAlign: 'center',
        marginBottom: moderateScale(25),
        letterSpacing: 1,
        textDecorationLine: 'underline',
    },
    photosContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: moderateScale(30),
        gap: moderateScale(20),
    },
    photoFrame: {
        borderWidth: 4,
        borderColor: '#000',
        borderRadius: 4,
        overflow: 'hidden',
    },
    photo: {
        width: getResponsiveValue(140, 160, 170, 180),
        height: getResponsiveValue(160, 180, 190, 200),
        backgroundColor: '#ddd',
    },
    dedicationText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: colors.text,
        textAlign: 'justify',
        marginBottom: moderateScale(40),
    },
    boldText: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    signatureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(20),
    },
    flowerIcon: {
        width: moderateScale(50),
        height: moderateScale(50),
        marginRight: moderateScale(10),
    },
    doveIcon: {
        width: moderateScale(50),
        height: moderateScale(50),
        marginLeft: moderateScale(10),
    },
    signature: {
        fontSize: scaleFont(20),
        fontFamily: 'GreatVibes_400Regular',
        color: colors.text,
        letterSpacing: 1,
    },
});