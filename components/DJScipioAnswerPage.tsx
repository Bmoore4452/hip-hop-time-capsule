import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';
import { getDJScipioPage, AnswerBlock, QRCodeEntry } from '../utils/djScipioAnswers';

interface DJScipioAnswerPageProps {
  pageNumber: number;
}

// ── QR code cell ──────────────────────────────────────────────────────────────
function QRCell({ entry }: { entry: QRCodeEntry }) {
  return (
    <TouchableOpacity
      style={styles.qrCell}
      onPress={() => Linking.openURL(entry.url)}
      activeOpacity={0.75}
    >
      <QRCode value={entry.url} size={moderateScale(70)} />
      <Text style={styles.qrCaption}>{entry.caption}</Text>
    </TouchableOpacity>
  );
}

// ── QR row (1, 2 or 3 codes) ──────────────────────────────────────────────────
function QRRow({ codes }: { codes: QRCodeEntry[] }) {
  return (
    <View style={styles.qrRow}>
      {codes.map((entry, i) => (
        <QRCell key={i} entry={entry} />
      ))}
    </View>
  );
}

// ── Single answer block ───────────────────────────────────────────────────────
function Answer({ block }: { block: AnswerBlock }) {
  const isOdd = block.questionNumber % 2 !== 0;

  return (
    <View style={styles.answerBlock}>
      {/* Question */}
      <Text style={styles.questionText}>
        {block.questionNumber}. {block.questionText}
      </Text>

      {/* Bubble */}
      <View style={isOdd ? styles.bubbleRowOdd : styles.bubbleRowEven}>
        {isOdd && (
          <View style={styles.circle}>
            <Text style={styles.circleText}>{block.questionNumber}</Text>
          </View>
        )}

        <View style={[styles.bubble, isOdd ? styles.bubbleOdd : styles.bubbleEven]}>
          <Text style={styles.answerText}>{block.answerText}</Text>

          {block.ripNote && (
            <View style={styles.ripRow}>
              <Text style={styles.ripText}>{block.ripNote}</Text>
              <Image
                source={require('../assets/dove-right.png')}
                style={styles.doveIcon}
                resizeMode="contain"
              />
            </View>
          )}
        </View>

        {!isOdd && (
          <View style={styles.circle}>
            <Text style={styles.circleText}>{block.questionNumber}</Text>
          </View>
        )}
      </View>

      {/* QR codes */}
      {block.qrCodes && block.qrCodes.length > 0 && (
        <QRRow codes={block.qrCodes} />
      )}
    </View>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function DJScipioAnswerPage({ pageNumber }: DJScipioAnswerPageProps) {
  const pageData = getDJScipioPage(pageNumber);

  if (!pageData) {
    return (
      <SafeAreaWrapper backgroundColor={colors.primary}>
        <View style={styles.container} />
      </SafeAreaWrapper>
    );
  }

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* pageLayout uses space-between so the footer is always pinned to bottom */}
        <View style={styles.pageLayout}>
          {/* answersContainer uses space-evenly so blocks spread across available height */}
          <View style={styles.answersContainer}>
            {pageData.answers.map((block) => (
              <Answer key={block.questionNumber} block={block} />
            ))}
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerHandle}>@ D J  S C I P I O</Text>
            <Text style={styles.footerPageNumber}>{pageNumber}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const CIRCLE_SIZE = moderateScale(44);
const CIRCLE_RADIUS = CIRCLE_SIZE / 2;
const BUBBLE_OVERLAP = moderateScale(14); // how far circle overlaps into the bubble

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // scrollContent grows to fill screen height so pageLayout can distribute space
  scrollContent: {
    flexGrow: 1,
  },
  // top-level flex container: answers take all available space, footer pinned to bottom
  pageLayout: {
    flex: 1,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(16),
    justifyContent: 'space-between',
  },
  // answers spread evenly across the space above the footer
  answersContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },

  // ── Answer block ────────────────────────────────────────────────────────────
  answerBlock: {
    // no fixed margin — space-evenly handles vertical distribution
  },
  questionText: {
    fontSize: scaleFont(13),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#000',
    marginBottom: moderateScale(10),
    lineHeight: scaleFont(19),
  },

  // ── Bubble rows ─────────────────────────────────────────────────────────────
  bubbleRowOdd: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: moderateScale(16),
  },
  bubbleRowEven: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(16),
  },

  // ── Bubble ──────────────────────────────────────────────────────────────────
  bubble: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    borderRadius: moderateScale(10),
    padding: moderateScale(12),
  },
  bubbleOdd: {
    marginLeft: -BUBBLE_OVERLAP, // circle overlaps left edge
    paddingLeft: BUBBLE_OVERLAP + moderateScale(8),
  },
  bubbleEven: {
    marginRight: -BUBBLE_OVERLAP, // circle overlaps right edge
    paddingRight: BUBBLE_OVERLAP + moderateScale(8),
  },
  answerText: {
    fontSize: scaleFont(13),
    lineHeight: scaleFont(19),
    color: '#000',
    textAlign: 'justify',
  },

  // ── Number circle ───────────────────────────────────────────────────────────
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    // shadow so circle lifts above bubble
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  circleText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: scaleFont(15),
  },

  // ── RIP note (e.g. "RIP Angie Stone" with dove) ─────────────────────────────
  ripRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(6),
  },
  ripText: {
    fontSize: scaleFont(12),
    fontWeight: 'bold',
    color: '#000',
    marginRight: moderateScale(6),
  },
  doveIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
    tintColor: colors.accent,
  },

  // ── QR row ──────────────────────────────────────────────────────────────────
  qrRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: moderateScale(10),
    gap: moderateScale(16),
    paddingHorizontal: moderateScale(4),
  },
  qrCell: {
    alignItems: 'center',
    minWidth: moderateScale(80),
    maxWidth: moderateScale(100),
  },
  qrCaption: {
    fontSize: scaleFont(10),
    color: '#000',
    textAlign: 'center',
    marginTop: moderateScale(4),
    fontStyle: 'italic',
    lineHeight: scaleFont(14),
  },

  // ── Footer ──────────────────────────────────────────────────────────────────
  footer: {
    alignItems: 'center',
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(24),
  },
  footerHandle: {
    fontSize: scaleFont(10),
    letterSpacing: 3,
    color: '#000',
    marginBottom: moderateScale(4),
  },
  footerPageNumber: {
    fontSize: scaleFont(13),
    color: '#000',
  },
});
