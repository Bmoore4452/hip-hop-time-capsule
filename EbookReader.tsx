import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import PageRenderer from "./components/PageRenderer";
import PageFooter from "./components/PageFooter";

const { width } = Dimensions.get("window");

export default function EbookReader() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 285;

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageTap = (event: any) => {
        const { locationX } = event.nativeEvent;
        const halfWidth = width / 2;

        if (locationX > halfWidth) {
            goToNextPage();
        } else {
            goToPreviousPage();
        }
    };

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.pageContainer}
                onPress={handlePageTap}
                activeOpacity={1}
            >
                <PageRenderer
                    pageNumber={currentPage}
                    onNavigateNext={goToNextPage}
                    onNavigatePrevious={goToPreviousPage}
                />
            </TouchableOpacity>

            <PageFooter
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    pageContainer: {
        flex: 1,
    },
});
