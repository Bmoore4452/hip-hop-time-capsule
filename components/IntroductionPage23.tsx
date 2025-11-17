import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaWrapper from "./SafeAreaWrapper";
import { scaleFont, moderateScale } from "../utils/responsive";
import { colors } from "../utils/colors";

interface IntroductionPage23Props {
    pageNumber: number;
}

export default function IntroductionPage23({ pageNumber }: IntroductionPage23Props) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                {/* Main content centered */}
                <View style={styles.contentContainer}>
                    {/* Main message */}
                    <Text style={styles.mainText}>GET READY</Text>

                    {/* Subtitle */}
                    <Text style={styles.subText}>THE QUESTIONS ARE{'\n'}COMING UP NEXT</Text>
                </View>

                {/* Page number */}
                <Text style={styles.pageNumber}>{pageNumber}</Text>
            </View>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: moderateScale(60),
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(40),
    },
    mainText: {
        fontSize: scaleFont(48),
        fontWeight: '900',
        color: '#8B4CD8',
        letterSpacing: 3,
        textAlign: 'center',
        marginBottom: moderateScale(30),
    },
    subText: {
        fontSize: scaleFont(20),
        fontWeight: '700',
        color: '#333',
        textAlign: 'center',
        lineHeight: scaleFont(28),
        letterSpacing: 1,
    },
    pageNumber: {
        fontSize: scaleFont(16),
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: moderateScale(20),
    },
});
