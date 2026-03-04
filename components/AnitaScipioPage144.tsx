import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface AnitaScipioPage144Props {
    pageNumber: number;
}

export default function AnitaScipioPage144({ pageNumber }: AnitaScipioPage144Props) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {/* Pink ink splatter at top right */}
                    <Image
                        source={require('../assets/ink_blot.png')}
                        style={styles.inkSplatter}
                        resizeMode="contain"
                    />

                    {/* Title Section */}
                    <View style={styles.titleSection}>
                        <Text style={styles.titleMain}>HIP HOP IS:</Text>
                        <Text style={styles.titleKeywords}>
                            RAP DJ'ING CULTURE FLOW STYLE{'\n'}
                            LYRICS RHYMES GRAFFITI B-BOY{'\n'}
                            FASHION BEATBOXING SAMPLING
                        </Text>
                    </View>

                    {/* MY NAME IS */}
                    <View style={styles.section}>
                        <Text style={styles.label}>MY NAME IS:</Text>
                        <View style={styles.inputDisplay}>
                            <Text style={styles.inputText}>ANITA SCIPIO</Text>
                        </View>
                    </View>

                    {/* I WAS BORN AND RAISED IN */}
                    <View style={styles.section}>
                        <Text style={styles.label}>I WAS BORN AND RAISED IN:</Text>
                        <View style={styles.inputDisplay}>
                            <Text style={styles.inputText}>HARLEM AND THE BRONX</Text>
                        </View>
                    </View>

                    {/* MY D.O.B IS */}
                    <View style={styles.section}>
                        <Text style={styles.label}>MY D.O.B IS:</Text>
                        <View style={styles.inputDisplay}>
                            <Text style={styles.inputText}>DEC 14, 1956</Text>
                        </View>
                    </View>

                    {/* I LOVE HIP-HOP */}
                    <View style={styles.section}>
                        <Text style={styles.label}>I LOVE HIP-HOP AND THIS IS MY{'\n'}JOURNEY.</Text>
                    </View>

                    {/* Bottom section */}
                    <View style={styles.bottomSection}>
                        <Image
                            source={require('../assets/microphone.png')}
                            style={styles.microphoneIcon}
                            resizeMode="contain"
                        />
                        <Text style={styles.pageNumber}>{pageNumber}</Text>
                    </View>
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
        paddingBottom: moderateScale(20),
        justifyContent: 'space-between',
    },
    inkSplatter: {
        position: 'absolute',
        top: moderateScale(5),
        right: moderateScale(-5),
        width: moderateScale(100),
        height: moderateScale(100),
        zIndex: 1,
    },
    titleSection: {
        marginTop: moderateScale(10),
        marginBottom: moderateScale(15),
        alignItems: 'center',
    },
    titleMain: {
        fontSize: scaleFont(24),
        fontWeight: 'bold',
        color: colors.accent,
        marginBottom: moderateScale(10),
        letterSpacing: 2,
    },
    titleKeywords: {
        fontSize: scaleFont(11),
        color: colors.accent,
        textAlign: 'center',
        lineHeight: scaleFont(16),
        fontWeight: '600',
        letterSpacing: 1.5,
    },
    section: {
        marginBottom: moderateScale(15),
    },
    label: {
        fontSize: scaleFont(14),
        fontWeight: 'bold',
        color: colors.accent,
        marginBottom: moderateScale(8),
        letterSpacing: 0.5,
        textAlign: 'center',
    },
    inputDisplay: {
        borderBottomWidth: 2,
        borderBottomColor: colors.accent,
        paddingVertical: moderateScale(10),
        paddingHorizontal: moderateScale(5),
        minHeight: moderateScale(35),
        backgroundColor: '#fff',
    },
    inputText: {
        fontSize: scaleFont(16),
        color: '#000',
        textAlign: 'center',
        letterSpacing: 2,
        fontWeight: '500',
    },
    bottomSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: moderateScale(10),
    },
    microphoneIcon: {
        width: moderateScale(60),
        height: moderateScale(60),
        tintColor: colors.accent,
    },
    pageNumber: {
        fontSize: scaleFont(20),
        color: '#000',
        fontWeight: 'bold',
    },
});
