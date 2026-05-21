import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';
import { getLetterTributePage, LetterParagraph } from '../utils/letterTributePages';

interface LetterTributePageProps {
  pageNumber: number;
}

const SERIF = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });

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

function Paragraph({ paragraph }: { paragraph: LetterParagraph }) {
  return (
    <Text style={styles.body}>
      {paragraph.map((seg, i) => (
        <Text
          key={i}
          style={[seg.bold && styles.boldSeg, seg.italic && styles.italicSeg]}
        >
          {seg.text}
        </Text>
      ))}
    </Text>
  );
}

export default function LetterTributePage({ pageNumber }: LetterTributePageProps) {
  const [fontsLoaded] = useFonts({ GreatVibes_400Regular });
  const pageData = getLetterTributePage(pageNumber);

  if (!fontsLoaded) {
    return <SafeAreaWrapper backgroundColor={colors.primary}><View style={styles.container} /></SafeAreaWrapper>;
  }

  if (!pageData) {
    return <SafeAreaWrapper backgroundColor={colors.primary}><View style={styles.container} /></SafeAreaWrapper>;
  }

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{pageData.title}</Text>
          <Divider />
          {pageData.subtitle ? (
            <Text style={styles.subtitle}>{pageData.subtitle}</Text>
          ) : null}

          {pageData.paragraphs.map((paragraph, i) => (
            <Paragraph key={i} paragraph={paragraph} />
          ))}

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
    paddingBottom: moderateScale(24),
  },
  title: {
    fontFamily: SERIF,
    fontSize: scaleFont(30),
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(12),
  },
  subtitle: {
    fontSize: scaleFont(14),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: scaleFont(20),
    marginBottom: moderateScale(20),
  },
  body: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(21),
    color: '#000',
    textAlign: 'justify',
    marginBottom: moderateScale(16),
  },
  boldSeg: {
    fontWeight: 'bold',
  },
  italicSeg: {
    fontStyle: 'italic',
  },
  signature: {
    fontFamily: 'GreatVibes_400Regular',
    fontSize: scaleFont(30),
    color: colors.primary,
    marginTop: moderateScale(12),
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
});
