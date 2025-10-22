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
import IntroductionPage from "./IntroductionPage";
import IntroductionPage13 from "./IntroductionPage13";
import IntroductionPage14 from "./IntroductionPage14";
import IntroductionPage15 from "./IntroductionPage15";
import IntroductionPage16 from "./IntroductionPage16";
import IntroductionPage17 from "./IntroductionPage17";
import IntroductionPage18 from "./IntroductionPage18";
import IntroductionPage19 from "./IntroductionPage19";
import IntroductionPage20 from "./IntroductionPage20";
import IntroductionPage21 from "./IntroductionPage21";
import IntroductionPage22 from "./IntroductionPage22";
import IntroductionPage23 from "./IntroductionPage23";

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
            case 12:
                return <IntroductionPage pageNumber={pageNumber} />;
            case 13:
                return <IntroductionPage13 pageNumber={pageNumber} />;
            case 14:
                return <IntroductionPage14 pageNumber={pageNumber} />;
            case 15:
                return <IntroductionPage15 pageNumber={pageNumber} />;
            case 16:
                return <IntroductionPage16 pageNumber={pageNumber} />;
            case 17:
                return <IntroductionPage17 pageNumber={pageNumber} />;
            case 18:
                return <IntroductionPage18 pageNumber={pageNumber} />;
            case 19:
                return <IntroductionPage19 pageNumber={pageNumber} />;
            case 20:
                return <IntroductionPage20 pageNumber={pageNumber} />;
            case 21:
                return <IntroductionPage21 pageNumber={pageNumber} />;
            case 22:
                return <IntroductionPage22 pageNumber={pageNumber} />;
            case 23:
                return <IntroductionPage23 pageNumber={pageNumber} />;
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
