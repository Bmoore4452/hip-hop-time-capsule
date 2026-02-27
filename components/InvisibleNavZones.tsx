import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Zone widths based on the diagram:
// Green edges (page nav): ~12% on each side, but only in middle vertical section
const EDGE_ZONE_WIDTH = width * 0.12;
const TOP_ZONE_HEIGHT = 120; // Header area - full width blue zone
const BOTTOM_ZONE_HEIGHT = 100; // Footer area - full width blue zone

interface InvisibleNavZonesProps {
    onNextPage: () => void;
    onPreviousPage: () => void;
    onToggleControls: () => void;
    disableCenterZone?: boolean;
    disabled?: boolean; // Disable all navigation zones
}

const InvisibleNavZones: React.FC<InvisibleNavZonesProps> = ({
    onNextPage,
    onPreviousPage,
    onToggleControls,
    disableCenterZone = false,
    disabled = false,
}) => {
    // If fully disabled, render nothing
    if (disabled) return null;

    return (
        <View style={styles.container} pointerEvents="box-none">
            {/* TOP BLUE ZONE - Full width, always toggle navigation */}
            <TouchableOpacity
                style={styles.topZone}
                onPress={onToggleControls}
                activeOpacity={1}
            />

            {/* BOTTOM BLUE ZONE - Full width, always toggle navigation */}
            <TouchableOpacity
                style={styles.bottomZone}
                onPress={onToggleControls}
                activeOpacity={1}
            />

            {/* GREEN ZONES - Page navigation (only in middle section vertically) */}
            {/* LEFT GREEN ZONE - Previous page */}
            <TouchableOpacity
                style={styles.leftZone}
                onPress={onPreviousPage}
                activeOpacity={1}
            />

            {/* RIGHT GREEN ZONE - Next page */}
            <TouchableOpacity
                style={styles.rightZone}
                onPress={onNextPage}
                activeOpacity={1}
            />

            {/* CENTER BLUE ZONE - Toggle navigation (can be disabled for interactive content) */}
            {!disableCenterZone && (
                <TouchableOpacity
                    style={styles.centerZone}
                    onPress={onToggleControls}
                    activeOpacity={1}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 10, // Above page content
    },
    // BLUE ZONES - Full width at top and bottom
    topZone: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: TOP_ZONE_HEIGHT,
    },
    bottomZone: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: BOTTOM_ZONE_HEIGHT,
    },
    // GREEN ZONES - Narrow edges, only in middle section
    leftZone: {
        position: 'absolute',
        left: 0,
        top: TOP_ZONE_HEIGHT,
        bottom: BOTTOM_ZONE_HEIGHT,
        width: EDGE_ZONE_WIDTH,
    },
    rightZone: {
        position: 'absolute',
        right: 0,
        top: TOP_ZONE_HEIGHT,
        bottom: BOTTOM_ZONE_HEIGHT,
        width: EDGE_ZONE_WIDTH,
    },
    // CENTER BLUE ZONE - Between edges, toggle controls
    centerZone: {
        position: 'absolute',
        left: EDGE_ZONE_WIDTH,
        right: EDGE_ZONE_WIDTH,
        top: TOP_ZONE_HEIGHT,
        bottom: BOTTOM_ZONE_HEIGHT,
    },
});

export default InvisibleNavZones;