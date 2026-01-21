import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Dimensions, ActivityIndicator, Text } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { colors } from '../utils/colors';
import { PageMetadata } from '../types/pageTypes';
import InteractiveFieldOverlay from './InteractiveFieldOverlay';
import pagesMetadata from '../data/pages-metadata.json';
import { getPageImage } from '../utils/pageImages';

// Decorative images registry
const DECORATIVE_IMAGES: { [key: string]: any } = {
    'b_boy1.png': require('../assets/b_boy1.png'),
    'crown.png': require('../assets/crown.png'),
    'hip_hop_chain.png': require('../assets/hip_hop_chain.png'),
    'ink_blot.png': require('../assets/ink_blot.png'),
    'microphone.png': require('../assets/microphone.png'),
    'splash-icon.png': require('../assets/splash-icon.png'),
};

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

                {/* Decorative images overlay */}
                {pageData.decorativeImages && pageData.decorativeImages.map((decorative, index) => {
                    const imageSource = DECORATIVE_IMAGES[decorative.name];
                    if (!imageSource) return null;

                    return (
                        <Image
                            key={`decorative-${index}`}
                            source={imageSource}
                            style={[
                                styles.decorativeImage,
                                {
                                    top: decorative.position.top,
                                    bottom: decorative.position.bottom,
                                    left: decorative.position.left,
                                    right: decorative.position.right,
                                    width: decorative.width,
                                    height: decorative.height,
                                }
                            ]}
                            resizeMode="contain"
                        />
                    );
                })}

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
    decorativeImage: {
        position: 'absolute',
        zIndex: 5,
    },
});
