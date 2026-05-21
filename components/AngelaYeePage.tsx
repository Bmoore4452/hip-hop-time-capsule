import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale, getResponsiveValue } from '../utils/responsive';
import { colors } from '../utils/colors';

interface AngelaYeePageProps {
  pageNumber: number;
}

const GOLD = '#E0A02C';
const PHOTO_W = getResponsiveValue(120, 135, 150, 165);

// Caption divider: a thin line with a small diamond in the center.
function CaptionDivider() {
  return (
    <View style={styles.capDivider}>
      <View style={styles.capLine} />
      <View style={styles.capDiamond} />
      <View style={styles.capLine} />
    </View>
  );
}

export default function AngelaYeePage({ pageNumber }: AngelaYeePageProps) {
  const [fontsLoaded] = useFonts({ GreatVibes_400Regular });

  if (!fontsLoaded) {
    return <SafeAreaWrapper backgroundColor={colors.primary}><View style={styles.container} /></SafeAreaWrapper>;
  }

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>

          {/* ── Angela section ─────────────────────────────────────────── */}
          <View style={styles.row}>
            <View style={styles.leftCol}>
              <Image source={require('../assets/angela-yee.png')} style={[styles.photo, { height: PHOTO_W * (478 / 420) }]} resizeMode="cover" />
              <Text style={styles.caption}>Angela Yee</Text>
              <CaptionDivider />
              <Text style={styles.congrats}>Congratulations!</Text>
            </View>
            <View style={styles.rightCol}>
              <Image source={require('../assets/way-up-logo.png')} style={styles.logo} resizeMode="contain" />
              <Text style={styles.body}>
                Got a chance to see my dear Angela, in her ‘Way Up with Angela Yee’ studio. I was so happy to see her again because throughout the years, she was always so kind and very generous to me.
              </Text>
              <Text style={styles.body}>
                Much success to you and your award-winning show!{'\n'}Love you Angela, Miss Anita
              </Text>
            </View>
          </View>

          {/* ── Transition paragraph ───────────────────────────────────── */}
          <Text style={styles.body}>
            On this day, I also hung out with “my dear son,” Dan, the Executive Producer of ‘Way Up with Angela Yee,’ but we didn’t get to take a picture that day. Here we are below from a previous occasion. He has and will always have a special place in my heart. Love you dearly “Son” - “Mama”
          </Text>

          {/* ── Dan section ────────────────────────────────────────────── */}
          <View style={styles.row}>
            <View style={styles.leftCol}>
              <Image source={require('../assets/dan-greene.png')} style={[styles.photo, { height: PHOTO_W * (432 / 400) }]} resizeMode="cover" />
              <Text style={styles.caption}>Dan Greene</Text>
              <CaptionDivider />
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.congrats}>Congratulations!</Text>
              <Text style={styles.body}>
                I wish you and Rida all the happiness in the world! You deserve it!
              </Text>
            </View>
          </View>

          <Text style={styles.note}>
            ***More to come... about my bond and admiration for Angela Yee.
          </Text>
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
    paddingHorizontal: moderateScale(26),
    paddingTop: moderateScale(34),
    paddingBottom: moderateScale(16),
  },
  row: {
    flexDirection: 'row',
    marginBottom: moderateScale(18),
  },
  leftCol: {
    width: PHOTO_W,
    alignItems: 'center',
  },
  rightCol: {
    flex: 1,
    marginLeft: moderateScale(16),
  },
  photo: {
    width: PHOTO_W,
    borderRadius: 6,
    backgroundColor: '#ddd',
  },
  caption: {
    fontSize: scaleFont(15),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: moderateScale(8),
  },
  congrats: {
    fontFamily: 'GreatVibes_400Regular',
    fontSize: scaleFont(26),
    color: GOLD,
    textAlign: 'center',
    marginTop: moderateScale(6),
  },
  logo: {
    width: moderateScale(110),
    height: moderateScale(66),
    alignSelf: 'center',
    marginBottom: moderateScale(10),
  },
  body: {
    fontSize: scaleFont(13.5),
    fontWeight: 'bold',
    lineHeight: scaleFont(20),
    color: '#000',
    marginBottom: moderateScale(14),
  },
  note: {
    fontSize: scaleFont(13),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: scaleFont(19),
    marginTop: moderateScale(4),
  },

  // ── Caption divider ─────────────────────────────────────────────────────────
  capDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(6),
  },
  capLine: {
    width: moderateScale(40),
    height: moderateScale(1.5),
    backgroundColor: '#000',
  },
  capDiamond: {
    width: moderateScale(7),
    height: moderateScale(7),
    backgroundColor: '#000',
    transform: [{ rotate: '45deg' }],
    marginHorizontal: moderateScale(6),
  },
});
