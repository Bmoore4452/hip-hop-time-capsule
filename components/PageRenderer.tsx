import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Import your page components
import TitlePage from "./TitlePage";
import ThankYouPage from "./ThankYouPage";
import CopyrightPage from "./CopyrightPage";
import TableOfContentsPage from "./TableOfContentsPage";
import TableOfContentsPage2 from "./TableOfContentsPage2";
import ForewordPage from "./ForewordPage";
import ForewordPage8 from "./ForewordPage8";
import ForewordPage9 from "./ForewordPage9";
import ForewordPage10 from "./ForewordPage10";
import ForewordPage11 from "./ForewordPage11";

interface PageRendererProps {
    pageNumber: number;
    onNavigateNext?: () => void;
    onNavigatePrevious?: () => void;
}

export default function PageRenderer({ pageNumber, onNavigateNext, onNavigatePrevious }: PageRendererProps) {
    const renderPage = () => {
        switch (pageNumber) {
            case 1:
                return <TitlePage pageNumber={pageNumber} />;
            case 2:
                return <ThankYouPage pageNumber={pageNumber} />; // Move ThankYouPage to page 2 for easier testing
            case 3:
                return <CopyrightPage pageNumber={pageNumber} />;
            case 4:
                return <TableOfContentsPage
                    pageNumber={pageNumber}
                    onNavigateNext={onNavigateNext}
                    onNavigatePrevious={onNavigatePrevious}
                />;
            case 5:
                return <TableOfContentsPage2
                    pageNumber={pageNumber}
                    onNavigateNext={onNavigateNext}
                    onNavigatePrevious={onNavigatePrevious}
                />;
            case 7:
                return <ForewordPage pageNumber={pageNumber} />;
            case 8:
                return <ForewordPage8 pageNumber={pageNumber} />;
            case 9:
                return <ForewordPage9 pageNumber={pageNumber} />;
            case 10:
                return <ForewordPage10 pageNumber={pageNumber} />;
            case 11:
                return <ForewordPage11 pageNumber={pageNumber} />;
            case 285: // Keep it at the end too
                return <ThankYouPage pageNumber={pageNumber} />;
            default:
                // For regular content pages, you could load from JSON or other data source
                return (
                    <View style={styles.container}>
                        <Text style={styles.pageContent}>
                            Page {pageNumber} content here
                        </Text>
                        <Text style={styles.pageNumber}>{pageNumber}</Text>
                    </View>
                );
        }
    };

    return renderPage();
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        justifyContent: "center",
    },
    pageContent: {
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center",
    },
    pageNumber: {
        position: "absolute",
        bottom: 20,
        alignSelf: "center",
        fontSize: 14,
    },
});
