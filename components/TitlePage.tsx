import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaWrapper from "./SafeAreaWrapper";

interface TitlePageProps {
    pageNumber: number;
}

export default function TitlePage({ pageNumber }: TitlePageProps) {
    return (
        <SafeAreaWrapper backgroundColor="#4555b9">
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
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    mainTitle: {
        fontSize: 42,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        letterSpacing: 2,
        marginBottom: 5,
    },
    subtitleContainer: {
        marginTop: 60,
        marginBottom: 80,
        alignItems: "center",
    },
    subtitle: {
        fontSize: 20,
        color: "#000",
        textAlign: "center",
        letterSpacing: 8,
        marginBottom: 8,
        fontWeight: "300",
    },
    authorSection: {
        alignItems: "center",
    },
    authoredBy: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        letterSpacing: 2,
        marginBottom: 40,
    },
    authorsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: 350,
    },
    authorName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        letterSpacing: 1,
    },
});
