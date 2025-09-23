import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaWrapper from "./SafeAreaWrapper";
import { colors } from "../utils/colors";

interface ThankYouPageProps {
    pageNumber: number;
}

export default function ThankYouPage({ pageNumber }: ThankYouPageProps) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <View style={styles.quoteSection}>
                        <View style={styles.quoteLine}>
                            <Text style={styles.musicNote}>♫ ♪</Text>
                            <Text style={styles.quote}>"Your Support Is</Text>
                            <Text style={styles.musicNote}>♫ ♪</Text>
                        </View>
                        <Text style={styles.quote}>Everything!"</Text>
                    </View>

                    <View style={styles.decorativeLine}>
                        <View style={styles.line} />
                        <Text style={styles.diamond}>♦</Text>
                        <View style={styles.line} />
                    </View>

                    <Text style={styles.thankYou}>Thank you!</Text>
                    <Text style={styles.authors}>Anita Scipio and DJ SCIPIO</Text>
                </View>

                <View style={styles.bottomSection}>
                    <View style={styles.silhouettesContainer}>
                        <Text style={styles.silhouette}>🕺</Text>
                        <Text style={styles.cassette}>📼</Text>
                        <Text style={styles.silhouette}>💃</Text>
                    </View>
                </View>
            </View>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    topSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 100, // Add space for bottom section
    },
    quoteSection: {
        alignItems: "center",
        marginBottom: 40,
    },
    quoteLine: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
    },
    musicNote: {
        fontSize: 24,
        color: colors.accent,
        marginHorizontal: 15,
    },
    quote: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.primary,
        textAlign: "center",
    },
    decorativeLine: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
        width: "80%",
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: colors.accent,
    },
    diamond: {
        fontSize: 16,
        color: colors.accent,
        marginHorizontal: 10,
    },
    thankYou: {
        fontSize: 28,
        fontWeight: "bold",
        color: colors.accent,
        marginBottom: 20,
    },
    authors: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
    bottomSection: {
        position: "absolute",
        bottom: 40,
        left: 0,
        right: 0,
        alignItems: "center",
    },
    silhouettesContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
    silhouette: {
        fontSize: 40,
        color: "#000",
    },
    cassette: {
        fontSize: 40,
        color: "#000",
    },
    pageNumber: {
        fontSize: 16,
        color: "#000",
        fontWeight: "bold",
    },
});
