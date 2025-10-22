import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface InvisibleNavZonesProps {
    onNextPage: () => void;
    onPreviousPage: () => void;
    onToggleControls: () => void;
}

const InvisibleNavZones: React.FC<InvisibleNavZonesProps> = ({
    onNextPage,
    onPreviousPage,
    onToggleControls,
}) => {
    return (
        <>
            {/* Left navigation zone */}
            <TouchableOpacity
                style={styles.leftZone}
                onPress={onPreviousPage}
                activeOpacity={1}
            />

            {/* Right navigation zone */}
            <TouchableOpacity
                style={styles.rightZone}
                onPress={onNextPage}
                activeOpacity={1}
            />

            {/* Center toggle zone */}
            <TouchableOpacity
                style={styles.centerZone}
                onPress={onToggleControls}
                activeOpacity={1}
            />
        </>
    );
};

const styles = StyleSheet.create({
    leftZone: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: width * 0.25, // 25% of screen width
        zIndex: 100,
    },
    rightZone: {
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: width * 0.25, // 25% of screen width
        zIndex: 100,
    },
    centerZone: {
        position: 'absolute',
        left: width * 0.25,
        right: width * 0.25,
        top: 0,
        bottom: 80, // Leave space for page footer at bottom
        zIndex: 100,
    },
});

export default InvisibleNavZones;