import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface PageNumberProps {
    pageNumber: number;
    style?: any;
}

const PageNumber: React.FC<PageNumberProps> = ({ pageNumber, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.pageNumber}>{pageNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    pageNumber: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
});

export default PageNumber;
