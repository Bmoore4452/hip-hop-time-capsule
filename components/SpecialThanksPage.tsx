import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface SpecialThanksPageProps {
  pageNumber: number;
}

const PHOTOS = [
  require('../assets/thanks219-1.png'),
  require('../assets/thanks219-2.png'),
  require('../assets/thanks219-3.png'),
  require('../assets/thanks219-4.png'),
  require('../assets/thanks219-5.png'),
  require('../assets/thanks219-6.png'),
];

const PHOTO_ASPECT = 375 / 400;

// Decorative divider: a line on each side of a small diamond.
function Divider() {
  return (
    <View style={styles.divider}>
      <View style={styles.dividerLine} />
      <View style={styles.diamond} />
      <View style={styles.dividerLine} />
    </View>
  );
}

// Pink cursive "love" flanked by arrowed lines.
function LoveDivider() {
  return (
    <View style={styles.loveRow}>
      <View style={styles.arrowLeft} />
      <View style={styles.loveLine} />
      <Text style={styles.loveText}>love</Text>
      <View style={styles.loveLine} />
      <View style={styles.arrowRight} />
    </View>
  );
}

export default function SpecialThanksPage({ pageNumber }: SpecialThanksPageProps) {
  const [fontsLoaded] = useFonts({ GreatVibes_400Regular });

  if (!fontsLoaded) {
    return <SafeAreaWrapper backgroundColor={colors.primary}><View style={styles.container} /></SafeAreaWrapper>;
  }

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>SPECIAL THANKS TO:</Text>
          <Divider />

          <Text style={styles.body}>
            My dear and precious nieces and nephew, <Text style={styles.bold}>Denise Scipio</Text>,{' '}
            <Text style={styles.bold}>Shirley B. Smith</Text>, and <Text style={styles.bold}>Melvin Hayes</Text>. My
            best friend <Text style={styles.bold}>Sana Shabazz</Text>, my brotha{' '}
            <Text style={styles.bold}>Greg Simpkins</Text> and last but not least my wonderful “son” all the way from
            Egypt, <Text style={styles.bold}>DJ Midowell</Text>. I thank you for your suggestions, advice and
            encouragement. I appreciate you so much and I love you with all my heart.
          </Text>

          <LoveDivider />

          <View style={styles.grid}>
            {PHOTOS.map((source, i) => (
              <Image
                key={i}
                source={source}
                style={styles.photo}
                resizeMode="cover"
              />
            ))}
          </View>
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
    color: colors.primary,
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: moderateScale(14),
  },
  body: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(21),
    color: '#000',
    textAlign: 'justify',
  },
  bold: {
    fontWeight: 'bold',
  },

  // ── Divider ─────────────────────────────────────────────────────────────────
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(16),
  },
  dividerLine: {
    width: moderateScale(70),
    height: moderateScale(1.5),
    backgroundColor: colors.primary,
  },
  diamond: {
    width: moderateScale(9),
    height: moderateScale(9),
    backgroundColor: colors.accent,
    transform: [{ rotate: '45deg' }],
    marginHorizontal: moderateScale(8),
  },

  // ── "love" divider ────────────────────────────────────────────────────────
  loveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(18),
  },
  loveText: {
    fontFamily: 'GreatVibes_400Regular',
    fontSize: scaleFont(40),
    color: colors.accent,
    marginHorizontal: moderateScale(10),
  },
  loveLine: {
    width: moderateScale(45),
    height: moderateScale(2),
    backgroundColor: colors.accent,
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderTopWidth: moderateScale(5),
    borderBottomWidth: moderateScale(5),
    borderRightWidth: moderateScale(8),
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: colors.accent,
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderTopWidth: moderateScale(5),
    borderBottomWidth: moderateScale(5),
    borderLeftWidth: moderateScale(8),
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: colors.accent,
  },

  // ── Photo grid ──────────────────────────────────────────────────────────────
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: -moderateScale(8),
  },
  photo: {
    width: '33%',
    aspectRatio: PHOTO_ASPECT,
    borderRadius: 8,
    backgroundColor: '#ddd',
    marginBottom: moderateScale(18),
  },
});
