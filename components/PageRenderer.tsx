import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PageFooterContext } from "./PageFooterContext";

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
import IntroductionPage24 from "./IntroductionPage24";
import QuestionPage from "./QuestionPage";
import QuotesPage from "./QuotesPage";
import TriviaGame from "./TriviaGame";
import DJScipioJourneyPage from "./DJScipioJourneyPage";
import DJScipioJourneyPage92 from "./DJScipioJourneyPage92";
import DJScipioAnswerPage from "./DJScipioAnswerPage";
import AnitaScipioJourneyPage from "./AnitaScipioJourneyPage";
import AnitaScipioPage144 from "./AnitaScipioPage144";
import AnitaScipioAnswerPage from "./AnitaScipioAnswerPage";
import YankeeConcertPage from "./YankeeConcertPage";
import BurstSplashPage from "./BurstSplashPage";
import TributePage from "./TributePage";
import ThankYouSectionsPage from "./ThankYouSectionsPage";
import LetterTributePage from "./LetterTributePage";
import SpecialThanksPage from "./SpecialThanksPage";
import IHeartThanksPage from "./IHeartThanksPage";
import AngelaYeePage from "./AngelaYeePage";
import BreakfastClubPage from "./BreakfastClubPage";
import BackMatterPage from "./BackMatterPage";
import { isQuestionPage } from "../utils/questionsConfig";
import { isQuotesPage } from "../utils/quotesData";

interface PageRendererProps {
    pageNumber: number;
    onNavigateNext?: () => void;
    onNavigatePrevious?: () => void;
    onGoToPage?: (page: number) => void;
    onShowNavigation?: () => void;
    onTriviaStateChange?: (state: string) => void;
}

export default function PageRenderer({ pageNumber, onNavigateNext, onNavigatePrevious, onGoToPage, onShowNavigation, onTriviaStateChange }: PageRendererProps) {
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
            case 24:
                return <IntroductionPage24 pageNumber={pageNumber} />;
            case 91:
                return <DJScipioJourneyPage pageNumber={pageNumber} />;
            case 92:
                return <DJScipioJourneyPage92 pageNumber={pageNumber} />;
            case 143:
                return <AnitaScipioJourneyPage pageNumber={pageNumber} />;
            case 144:
                return <AnitaScipioPage144 pageNumber={pageNumber} />;
            case 213:
            case 214:
                return <YankeeConcertPage pageNumber={pageNumber} />;
            case 215:
                return <BurstSplashPage pageNumber={pageNumber} lines={["ANITA", "“THANK-YOUS”"]} />;
            case 216:
                return <TributePage pageNumber={pageNumber} />;
            case 217:
                return <ThankYouSectionsPage pageNumber={pageNumber} />;
            case 218:
                return <LetterTributePage pageNumber={pageNumber} />;
            case 219:
                return <SpecialThanksPage pageNumber={pageNumber} />;
            case 220:
                return <IHeartThanksPage pageNumber={pageNumber} />;
            case 221:
                return <AngelaYeePage pageNumber={pageNumber} />;
            case 222:
                return <BreakfastClubPage pageNumber={pageNumber} />;
            case 244:
                return <BurstSplashPage pageNumber={pageNumber} lines={["ANITA AKA “MAMA”", "“SHOUT-OUTS”"]} />;
            case 254:
                return <BurstSplashPage pageNumber={pageNumber} lines={["“IT’S ALL LOVE”", "ANITA"]} />;
            case 257:
                return <BurstSplashPage pageNumber={pageNumber} lines={["ANITA", "“SHARIN’ THE LOVE”"]} />;
            case 266:
                return <BurstSplashPage pageNumber={pageNumber} lines={["DJ SCIPIO", "“THANK-YOU”"]} />;
            case 268:
                return <BurstSplashPage pageNumber={pageNumber} lines={["DJ SCIPIO", "“SHOUT-OUTS”"]} />;
            default:
                // Back-matter pages (223-287): thank-yous, shout-outs, about the
                // authors, celebrity photo album, retirement party, and closing
                // pages. Data in utils/backMatterPages.ts.
                if (pageNumber >= 223 && pageNumber <= 287) {
                    return <BackMatterPage pageNumber={pageNumber} />;
                }
                // DJ Scipio answer pages (pages 93-142)
                if (pageNumber >= 93 && pageNumber <= 142) {
                    return <DJScipioAnswerPage pageNumber={pageNumber} />;
                }
                // Anita Scipio answer pages (pages 145-212)
                if (pageNumber >= 145 && pageNumber <= 212) {
                    return <AnitaScipioAnswerPage pageNumber={pageNumber} />;
                }
                // Check if this is a question page (pages 25+)
                if (isQuestionPage(pageNumber)) {
                    return <QuestionPage pageNumber={pageNumber} />;
                }
                // Check if this is a quotes page (pages 76-80)
                if (isQuotesPage(pageNumber)) {
                    return <QuotesPage pageNumber={pageNumber} />;
                }
                // Check if this is a trivia page (pages 81-90)
                if (pageNumber >= 81 && pageNumber <= 90) {
                    return (
                        <TriviaGame
                            onContinue={() => onGoToPage ? onGoToPage(91) : onNavigateNext?.()}
                            onShowNavigation={onShowNavigation}
                            onGameStateChange={onTriviaStateChange}
                        />
                    );
                }
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

    // The standard bottom footer (page number) is shown on every page except
    // the trivia game and pages that already draw their own footer.
    const isTriviaPage = pageNumber >= 81 && pageNumber <= 90;
    const hasOwnFooter =
        (pageNumber >= 93 && pageNumber <= 142) ||  // DJ Scipio answer pages
        (pageNumber >= 145 && pageNumber <= 211) || // Anita Scipio answer pages
        pageNumber === 143 ||                        // Anita Scipio journey (purple)
        pageNumber === 215 ||                        // Anita "Thank-Yous" burst (purple)
        pageNumber === 244 ||                        // Anita "Shout-Outs" burst (purple)
        pageNumber === 254 ||                        // "It's All Love" burst (purple)
        pageNumber === 257 ||                        // Anita "Sharin' The Love" burst (purple)
        pageNumber === 266 ||                        // DJ Scipio "Thank-You" burst (purple)
        pageNumber === 268;                          // DJ Scipio "Shout-Outs" burst (purple)
    const footerPageNumber = isTriviaPage || hasOwnFooter ? null : pageNumber;

    return (
        <PageFooterContext.Provider value={footerPageNumber}>
            {renderPage()}
        </PageFooterContext.Provider>
    );
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
