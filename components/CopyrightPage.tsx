import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeAreaWrapper from "./SafeAreaWrapper";
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from "../utils/colors";

interface CopyrightPageProps {
    pageNumber: number;
}

export default function CopyrightPage({ pageNumber }: CopyrightPageProps) {
    return (
        <SafeAreaWrapper backgroundColor="#fff">
            <View style={styles.container}>
                <View style={styles.contentSection}>
                    <Text style={styles.copyrightText}>
                        "All rights reserved. No part of this publication can be quoted,
                        reproduced, distributed in any form by means of printing, scanning,
                        photocopying, or otherwise, without the prior permission of the
                        copyright holder, with the exception in the case of brief quotations
                        embodied in critical reviews permitted by copyright law."
                    </Text>
                </View>

                <View style={styles.bottomSection}>
                    <View style={styles.copyrightNotice}>
                        <Text style={styles.copyrightSymbol}>©</Text>
                        <Text style={styles.copyrightYear}>2024 TEAM SCIPIO</Text>
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
        paddingHorizontal: moderateScale(30),
        paddingVertical: moderateScale(40),
        justifyContent: "space-between",
    },
    contentSection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    copyrightText: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(24),
        color: "#000",
        textAlign: "justify",
        fontFamily: "serif", // This might need to be adjusted based on available fonts
    },
    bottomSection: {
        alignItems: "center",
    },
    copyrightNotice: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: moderateScale(20),
    },
    copyrightSymbol: {
        fontSize: scaleFont(18),
        color: "#ebf043ff",
        marginRight: moderateScale(5),
        fontWeight: "bold",
    },
    copyrightYear: {
        fontSize: scaleFont(16),
        color: colors.accent,
        fontWeight: "bold",
    },
    pageNumber: {
        fontSize: scaleFont(16),
        color: "#000",
        fontWeight: "bold",
    },
});
