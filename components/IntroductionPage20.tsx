import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPage20Props {
    pageNumber: number;
}

export default function IntroductionPage20({ pageNumber }: IntroductionPage20Props) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    {/* Photo placeholders for DaBaby */}
                    <View style={styles.photosContainer}>
                        <Image
                            source={require('../assets/da-baby-left.png')}
                            style={styles.imagePlaceholder}
                        />
                        <Image
                            source={require('../assets/da-baby-right.png')}
                            style={styles.imagePlaceholder}
                        />
                    </View>

                    <Text style={styles.artistTitle}>DaBaby</Text>
                    <View style={styles.decorativeLine} />

                    <Text style={styles.storyText}>
                        Holy Cow!! It's Tuesday, Oct. 1st, and I am home - retired, chilling on a cloudy day, watching YouTube. Oh, how the mighty have fallen. :) Just kiddin'... I love YouTube. I get a call from Sherri (his label rep and my friend), who says, <Text style={styles.boldText}>"Stand by, someone wants to speak to you!!"</Text> Tears ran down my face because I knew who it was!! OMG! Do I look happy or what? He was at The Breakfast Club, and he said when he didn't see me he <Text style={styles.boldText}>"was very upset and started stomping his feet!!"</Text> :) She reached out to me, and this is the result. Now that's love! It's so nice to be remembered! DaBaby, I love you back and I want you to know how much you made my day!! God bless you, hope to see you again soon.
                    </Text>

                    <Text style={styles.appreciationText}>
                        Sherri, Garrett and the entire team, I appreciate you. DaBaby... thanks a million! You are awesome and will always have a special place in my heart! I wish you, your two delightful children and loved ones, all the very best! BTW... your free-styles are crazy! Love Always, <Text style={styles.boldText}>"Mama"</Text>
                    </Text>
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
        paddingBottom: moderateScale(100),
    },
    photosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(20),
    },
    imagePlaceholder: {
        width: getResponsiveValue(140, 160, 180, 200),
        height: getResponsiveValue(160, 180, 200, 220),
        backgroundColor: '#ddd',
        borderRadius: 8,
        marginHorizontal: moderateScale(4),
    },
    artistTitle: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: moderateScale(15),
    },
    decorativeLine: {
        alignSelf: 'center',
        width: getResponsiveValue(150, 180, 200, 250),
        height: moderateScale(3),
        backgroundColor: '#000',
        marginBottom: moderateScale(25),
        borderRadius: 1.5,
    },
    storyText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        marginBottom: moderateScale(20),
        textAlign: 'justify',
    },
    appreciationText: {
        fontSize: scaleFont(14),
        lineHeight: scaleFont(20),
        color: '#000',
        marginBottom: moderateScale(30),
        textAlign: 'justify',
    },
    boldText: {
        fontWeight: 'bold',
    },
    stayTuned: {
        fontSize: scaleFont(18),
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop: moderateScale(20),
    },
});
