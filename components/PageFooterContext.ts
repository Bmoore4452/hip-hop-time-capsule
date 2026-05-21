import { createContext, useContext } from 'react';

// Provides the page number that SafeAreaWrapper should render in the standard
// bottom footer. `null` means no footer (e.g. trivia pages, or pages that draw
// their own footer).
export const PageFooterContext = createContext<number | null>(null);

export const usePageFooter = () => useContext(PageFooterContext);
