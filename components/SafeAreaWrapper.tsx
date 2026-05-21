import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePageFooter } from './PageFooterContext';
import PageNumberFooter from './PageNumberFooter';

interface SafeAreaWrapperProps {
    children: React.ReactNode;
    style?: ViewStyle;
    backgroundColor?: string;
}

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
    children,
    style,
    backgroundColor = '#4555b9',
}) => {
    const footerPageNumber = usePageFooter();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
            {footerPageNumber == null ? (
                children
            ) : (
                <View style={styles.footerLayout}>
                    <View style={styles.footerContent}>{children}</View>
                    <PageNumberFooter pageNumber={footerPageNumber} />
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // When a page footer is shown, content fills the space above it and the
    // footer sits pinned at the bottom over a white background.
    footerLayout: {
        flex: 1,
        backgroundColor: '#fff',
    },
    footerContent: {
        flex: 1,
    },
});

export default SafeAreaWrapper;
