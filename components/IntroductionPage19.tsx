import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface IntroductionPage19Props {
    pageNumber: number;
}

export default function IntroductionPage19({ pageNumber }: IntroductionPage19Props) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    {/* Photo placeholders */}
                    <View style={styles.photosContainer}>
                        <View style={styles.photoFrame}>
                            <Image
                                source={require('../assets/kool-moe-dee-ll-cool-j.png')}
                                style={styles.imagePlaceholder}
                            />
                        </View>

                        <View style={styles.photoFrame}>
                            <Image
                                source={require('../assets/50-cent.png')}
                                style={styles.imagePlaceholder}
                            />
                        </View>
                    </View>

                    <Text style={styles.sneakPeekTitle}>Sneak Peek.</Text>
                    <View style={styles.decorativeLine} />

                    <Text style={styles.artistsList}>
                        Kool Moe Dee. LL Cool J. Snoop Dogg.
                    </Text>

                    <Text style={styles.artistsList}>
                        DMX. Will Smith. Salt-N-Pepa.
                    </Text>

                    <Text style={styles.artistsList}>
                        Mary J Blige. Fat Joe. Ice Tea. Rick Ross.
                    </Text>

                    <Text style={styles.artistsList}>
                        Ice Cube. 50 Cent. Young MA. 2 Chainz.
                    </Text>

                    <Text style={styles.artistsList}>
                        Da Baby. Will Smith. Jezzy. Run-DMC.
                    </Text>

                    <Text style={styles.artistsList}>
                        French Montana. Redman. Wiz Khalifa. Big Sean.
                    </Text>

                    <Text style={styles.artistsList}>
                        Nelly. TI. Sean Paul. Treach. Moneybagg Yo...
                        and many more.
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
        paddingBottom: moderateScale(60),
    },
    photosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(30),
    },
    photoFrame: {
        flex: 1,
        marginHorizontal: moderateScale(5),
        alignItems: 'center',
    },
    imagePlaceholder: {
        width: getResponsiveValue(140, 160, 180, 200),
        height: getResponsiveValue(160, 180, 200, 220),
        backgroundColor: '#ddd',
        borderRadius: 8,
        marginBottom: moderateScale(10),
    },
    photoCaption: {
        fontSize: scaleFont(8),
        color: '#000',
        textAlign: 'center',
        marginBottom: moderateScale(5),
        fontStyle: 'italic',
    },
    artistLabels: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    artistName: {
        fontSize: scaleFont(10),
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sneakPeekTitle: {
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
        marginBottom: moderateScale(30),
        borderRadius: 1.5,
    },
    artistsList: {
        fontSize: scaleFont(16),
        color: '#000',
        textAlign: 'center',
        marginBottom: moderateScale(15),
        fontWeight: '500',
        letterSpacing: 0.5,
    },
});
