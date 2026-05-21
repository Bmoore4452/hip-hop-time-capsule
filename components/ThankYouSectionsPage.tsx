import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';
import { getThankYouSectionsPage } from '../utils/thankYouSectionsPages';

interface ThankYouSectionsPageProps {
  pageNumber: number;
}

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

export default function ThankYouSectionsPage({ pageNumber }: ThankYouSectionsPageProps) {
  const pageData = getThankYouSectionsPage(pageNumber);

  if (!pageData) {
    return <SafeAreaWrapper backgroundColor={colors.primary}><View style={styles.container} /></SafeAreaWrapper>;
  }

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {pageData.sections.map((section, i) => (
            <View key={i} style={i > 0 ? styles.sectionSpacing : undefined}>
              <Text style={styles.heading}>{section.heading}</Text>
              <Divider />
              <Text style={styles.body}>{section.body}</Text>
            </View>
          ))}
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
  sectionSpacing: {
    marginTop: moderateScale(24),
  },
  heading: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(10),
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

  body: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(21),
    color: '#000',
    textAlign: 'justify',
  },
});
