import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';
import { getTributePage } from '../utils/tributePages';

interface TributePageProps {
  pageNumber: number;
}

const PHOTO_WIDTH = getResponsiveValue(230, 250, 270, 300);

export default function TributePage({ pageNumber }: TributePageProps) {
  const pageData = getTributePage(pageNumber);

  if (!pageData) {
    return <SafeAreaWrapper backgroundColor={colors.primary}><View style={styles.container} /></SafeAreaWrapper>;
  }

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{pageData.title}</Text>

          <Image
            source={pageData.photo}
            style={[styles.photo, { height: PHOTO_WIDTH / pageData.photoAspectRatio }]}
            resizeMode="cover"
          />

          <Text style={styles.body}>{pageData.body}</Text>

          <Text style={styles.signature}>{pageData.signature}</Text>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: moderateScale(30),
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(16),
  },
  title: {
    fontSize: scaleFont(19),
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    textDecorationLine: 'underline',
    lineHeight: scaleFont(26),
    marginBottom: moderateScale(20),
  },
  photo: {
    width: PHOTO_WIDTH,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginBottom: moderateScale(22),
  },
  body: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(21),
    color: '#000',
    textAlign: 'justify',
    marginBottom: moderateScale(20),
  },
  signature: {
    fontSize: scaleFont(14),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.accent,
    textAlign: 'center',
    lineHeight: scaleFont(20),
  },
});
