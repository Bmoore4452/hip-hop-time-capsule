import React from 'react';
import { StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

interface InvisibleNavZonesProps {
    onNextPage: () => void;
    onPreviousPage: () => void;
    onToggleControls: () => void;
    disableCenterZone?: boolean;
}

const InvisibleNavZones: React.FC<InvisibleNavZonesProps> = ({
    onNextPage,
    onPreviousPage,
    onToggleControls,
    disableCenterZone = false,
}) => {
    return (
        <>
            {/* Left navigation zone */}
            <View style={styles.leftZone} pointerEvents="box-none">
                <TouchableOpacity
                    style={StyleSheet.absoluteFill}
                    onPress={onPreviousPage}
                    activeOpacity={1}
                />
            </View>

            {/* Right navigation zone */}
            <View style={styles.rightZone} pointerEvents="box-none">
                <TouchableOpacity
                    style={StyleSheet.absoluteFill}
                    onPress={onNextPage}
                    activeOpacity={1}
                />
            </View>

            {/* Center toggle zone - can be disabled for pages with interactive content */}
            {!disableCenterZone && (
                <View style={styles.centerZone} pointerEvents="box-none">
                    <TouchableOpacity
                        style={StyleSheet.absoluteFill}
                        onPress={onToggleControls}
                        activeOpacity={1}
                    />
                </View>
            )}
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