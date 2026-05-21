import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface BreakfastClubPageProps {
  pageNumber: number;
}

const LOGO_W = getResponsiveValue(150, 165, 180, 200);
const PAGE_PADDING = moderateScale(30);
const PHOTO_W = Dimensions.get('window').width - PAGE_PADDING * 2;
const PHOTO_H = PHOTO_W * (740 / 1190);

export default function BreakfastClubPage({ pageNumber }: BreakfastClubPageProps) {
  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <View style={styles.headingRow}>
            <Text style={styles.headingText}>My Recent Visit To:</Text>
            <Image
              source={require('../assets/breakfast-club-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.body}>
            I recently visited the iHeartMedia, New York offices to catch up with my “family.” My visit also allowed me to bring a proof copy of this book to hopefully gain their approval and support. They all assured me that they would do anything they could to make this a successful and fulfilling endeavor, and for that, I am so grateful! Unfortunately, on that day, not everyone was available to be included in these photos. With a few exceptions, this is how we memorialized our time together.
          </Text>

          <Text style={styles.subheading}>My Beloved Breakfast Club Family</Text>

          <Image
            source={require('../assets/breakfast-club-group.png')}
            style={styles.groupPhoto}
            resizeMode="cover"
          />
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
    paddingHorizontal: PAGE_PADDING,
    paddingTop: moderateScale(36),
    paddingBottom: moderateScale(16),
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: moderateScale(18),
  },
  headingText: {
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    color: colors.primary,
    marginRight: moderateScale(8),
  },
  logo: {
    width: LOGO_W,
    height: LOGO_W * (195 / 560),
  },
  body: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(21),
    color: '#000',
    textAlign: 'justify',
    marginBottom: moderateScale(20),
  },
  subheading: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(18),
  },
  groupPhoto: {
    width: PHOTO_W,
    height: PHOTO_H,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },
});
