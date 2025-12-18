import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, ActivityIndicator } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { colors } from '../utils/colors';
import { PageMetadata } from '../types/pageTypes';
import InteractiveFieldOverlay from './InteractiveFieldOverlay';
import pagesMetadata from '../data/pages-metadata.json';
import { getPageImage } from '../utils/pageImages';

interface UniversalPageRendererProps {
    pageNumber: number;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function UniversalPageRenderer({ pageNumber }: UniversalPageRendererProps) {
    const [pageData, setPageData] = useState<PageMetadata | null>(null);
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        // Load page metadata
        const data = (pagesMetadata as PageMetadata[]).find(
            p => p.pageNumber === pageNumber
        );
        setPageData(data || null);
    }, [pageNumber]);

    if (!pageData) {
        return (
            <SafeAreaWrapper backgroundColor={colors.primary}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.accent} />
                </View>
            </SafeAreaWrapper>
        );
    }

    // Get page image from static registry
    const pageImage = getPageImage(pageNumber);

    return (
        <SafeAreaWrapper backgroundColor={colors.primary}>
            <View style={styles.container}>
                {/* Background page image */}
                {pageImage && (
                    <Image
                        source={pageImage}
                        style={styles.pageImage}
                        resizeMode="contain"
                        onLoadStart={() => setImageLoading(true)}
                        onLoadEnd={() => setImageLoading(false)}
                    />
                )}

                {/* Loading indicator */}
                {imageLoading && (
                    <View style={styles.loadingOverlay}>
                        <ActivityIndicator size="large" color={colors.accent} />
                    </View>
                )}

                {/* Interactive fields overlay */}
                {pageData.hasInputFields && pageData.inputFields && (
                    <InteractiveFieldOverlay
                        pageNumber={pageNumber}
                        fields={pageData.inputFields}
                    />
                )}
            </View>
        </SafeAreaWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        position: 'relative',
    },
    pageImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
