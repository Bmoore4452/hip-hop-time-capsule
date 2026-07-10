import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';
import { getYankeeConcertPage } from '../utils/yankeeConcertPages';

interface YankeeConcertPageProps {
  pageNumber: number;
}

const PHOTO_WIDTH = getResponsiveValue(135, 150, 165, 185);
const QR_SIZE = getResponsiveValue(95, 105, 115, 125);

export default function YankeeConcertPage({ pageNumber }: YankeeConcertPageProps) {
  const pageData = getYankeeConcertPage(pageNumber);

  if (!pageData) {
    return <SafeAreaWrapper backgroundColor={colors.primary}><View style={styles.container} /></SafeAreaWrapper>;
  }

  const photoHeight = PHOTO_WIDTH / pageData.photoAspectRatio;

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{pageData.title}</Text>
          <View style={styles.decorativeLine} />

          <View style={styles.grid}>
            {pageData.photos.map((photo, i) => (
              <View key={i} style={styles.cell}>
                <Image
                  source={photo.source}
                  style={[styles.photo, { height: photoHeight }]}
                  resizeMode="cover"
                />
                {photo.caption ? (
                  <Text style={styles.caption}>{photo.caption}</Text>
                ) : null}
              </View>
            ))}
          </View>

          {pageData.qrCodes && pageData.qrCodes.length > 0 && (
            <View style={styles.qrRow}>
              {pageData.qrCodes.map((qr, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.qrCell}
                  onPress={() => Linking.openURL(qr.url)}
                  activeOpacity={0.75}
                >
                  <QRCode value={qr.qrValue ?? qr.url} size={QR_SIZE} />
                  <Text style={styles.qrCaption}>{qr.caption}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
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
    fontSize: scaleFont(22),
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
    marginBottom: moderateScale(14),
  },
  decorativeLine: {
    alignSelf: 'center',
    width: getResponsiveValue(150, 180, 200, 250),
    height: moderateScale(3),
    backgroundColor: colors.accent,
    marginBottom: moderateScale(28),
    borderRadius: 1.5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cell: {
    width: PHOTO_WIDTH,
    alignItems: 'center',
    marginBottom: moderateScale(24),
  },
  photo: {
    width: PHOTO_WIDTH,
    backgroundColor: '#ddd',
    borderRadius: 8,
  },
  caption: {
    fontSize: scaleFont(12),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: moderateScale(10),
    lineHeight: scaleFont(16),
  },
  qrRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: moderateScale(8),
  },
  qrCell: {
    alignItems: 'center',
    maxWidth: getResponsiveValue(150, 160, 170, 180),
    marginHorizontal: moderateScale(8),
  },
  qrCaption: {
    fontSize: scaleFont(11),
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: moderateScale(8),
    lineHeight: scaleFont(15),
  },
});
