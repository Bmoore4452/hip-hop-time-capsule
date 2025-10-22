import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SafeAreaWrapper from "./SafeAreaWrapper";
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from "../utils/colors";

interface TitlePageProps {
    pageNumber: number;
}

export default function TitlePage({ pageNumber }: TitlePageProps) {
    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.titleContainer}>
                    <Text style={styles.mainTitle}>HIP-HOP TIME</Text>
                    <Text style={styles.mainTitle}>CAPSULE:</Text>

                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>DOCUMENT</Text>
                        <Text style={styles.subtitle}>YOUR PERSONAL</Text>
                        <Text style={styles.subtitle}>JOURNEY</Text>
                    </View>

                    <View style={styles.authorSection}>
                        <Text style={styles.authoredBy}>AUTHORED BY:</Text>

                        <View style={styles.authorsContainer}>
                            <Text style={styles.authorName}>ANITA SCIPIO & </Text>
                            <Text style={styles.authorName}>HILTON V. SCIPIO</Text>
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
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: moderateScale(20),
        minHeight: 600,
    },
    mainTitle: {
        fontSize: scaleFont(42),
        fontWeight: "bold",
        color: colors.accent,
        textAlign: "center",
        letterSpacing: 2,
        marginBottom: moderateScale(5),
    },
    subtitleContainer: {
        marginTop: moderateScale(60),
        marginBottom: moderateScale(80),
        alignItems: "center",
    },
    subtitle: {
        fontSize: scaleFont(20),
        color: colors.primary,
        textAlign: "center",
        letterSpacing: 8,
        marginBottom: moderateScale(8),
        fontWeight: "700",
    },
    authorSection: {
        alignItems: "center",
    },
    authoredBy: {
        fontSize: scaleFont(16),
        fontWeight: "bold",
        color: "#000",
        letterSpacing: 2,
        marginBottom: moderateScale(40),
    },
    authorsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: getResponsiveValue(300, 350, 400, 450),
    },
    authorName: {
        fontSize: scaleFont(16),
        fontWeight: "bold",
        color: "#000",
        letterSpacing: 1,
    },
});
