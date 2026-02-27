import React from 'react';
import QuestionPageTemplate from './QuestionPageTemplate';
import { getQuestionPageConfig } from '../utils/questionsConfig';

interface QuestionPageProps {
    pageNumber: number;
}

/**
 * QuestionPage - A wrapper that automatically loads the correct question config
 * based on page number.
 * 
 * Usage in PageRenderer:
 *   case 25:
 *   case 26:
 *   case 27:
 *     return <QuestionPage pageNumber={currentPage} />;
 */
export default function QuestionPage({ pageNumber }: QuestionPageProps) {
    const config = getQuestionPageConfig(pageNumber);

    if (!config) {
        console.warn(`No question config found for page ${pageNumber}`);
        return null;
    }

    return (
        <QuestionPageTemplate
            config={config}
            pageNumber={pageNumber}
        />
    );
}
