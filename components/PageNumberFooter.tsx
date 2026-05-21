import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { scaleFont, moderateScale } from '../utils/responsive';

// Standard page-number footer, matching the Anita/DJ Scipio answer pages.
export default function PageNumberFooter({ pageNumber }: { pageNumber: number }) {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerPageNumber}>{pageNumber}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(24),
    backgroundColor: '#fff',
  },
  footerPageNumber: {
    fontSize: scaleFont(13),
    color: '#000',
  },
});
