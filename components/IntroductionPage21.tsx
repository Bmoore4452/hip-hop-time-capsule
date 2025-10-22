import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPage21Props {
    pageNumber: number;
}

export default function IntroductionPage21({ pageNumber }: IntroductionPage21Props) {
    const [fontsLoaded] = useFonts({
        GreatVibes_400Regular,
    });

    if (!fontsLoaded) {
        return null; // or a loading spinner
    }

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>ANITA'S DEDICATION</Text>

                    {/* Photo section */}
                    <View style={styles.photosContainer}>
                        <View style={styles.photoFrame}>
                            <Image
                                source={require('../assets/AVS-left.png')}
                                style={styles.photo}
                            />
                        </View>
                        <View style={styles.photoFrame}>
                            <Image
                                source={require('../assets/GRR-right.png')}
                                style={styles.photo}
                            />
                        </View>
                    </View>

                    <Text style={styles.dedicationText}>
                        My deepest love and gratitude go to my dear daughter, <Text style={styles.boldText}>Arlene Yvette Scipio</Text>, and my precious granddaughter, <Text style={styles.boldText}>Gayla Renee Robinson</Text>. This book is dedicated to both of you. It is a small tribute to the love and legacy that we share, and I hope and pray that it fills you with pride and joy. Thank you, Arlene, for your love, encouragement and support. Thank you, Gayla, for all of your love and infinite concern regarding me getting proper rest. I was not, but it was all worth it in the end! I am truly blessed and forever grateful that God allowed each of you to be in my life and that you are critically important. Bless you, both and may God continue you to guide you and direct your path.
                    </Text>

                    <View style={styles.signatureContainer}>
                        <Image
                            source={require('../assets/hearts.png')}
                            style={styles.heartIcon}
                        />
                        <Text style={styles.signature}>Love, Mom & Grandma</Text>
                        <Image
                            source={require('../assets/hearts.png')}
                            style={styles.heartIcon}
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
    heartIcon: {
        width: moderateScale(40),
        height: moderateScale(40),
        marginHorizontal: moderateScale(10),
    },
    signature: {
        fontSize: scaleFont(24),
        fontFamily: 'GreatVibes_400Regular',
        color: colors.primary,
        letterSpacing: 1,
    },
});