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
import { getAnitaScipioPage, AnitaAnswerBlock, QRCodeEntry } from '../utils/anitaScipioAnswers';

interface AnitaScipioAnswerPageProps {
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

// ── QR row ────────────────────────────────────────────────────────────────────
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
function Answer({ block }: { block: AnitaAnswerBlock }) {
  const isOdd = block.questionNumber % 2 !== 0;

  return (
    <View style={styles.answerBlock}>
      {/* Question (or "Continued..." when the block carries over from the previous page) */}
      <Text style={styles.questionText}>
        {block.continued
          ? 'Continued...'
          : `${block.questionNumber}. ${block.questionText}`}
      </Text>

      {/* Bubble (continued blocks may be QR-codes-only, with no text) */}
      {(!block.continued || block.answerText) && (
        <View style={isOdd ? styles.bubbleRowOdd : styles.bubbleRowEven}>
          {isOdd && !block.continued && (
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

          {!isOdd && !block.continued && (
            <View style={styles.circle}>
              <Text style={styles.circleText}>{block.questionNumber}</Text>
            </View>
          )}
        </View>
      )}

      {/* QR codes */}
      {block.qrCodes && block.qrCodes.length > 0 && (
        <QRRow codes={block.qrCodes} />
      )}
    </View>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AnitaScipioAnswerPage({ pageNumber }: AnitaScipioAnswerPageProps) {
  const pageData = getAnitaScipioPage(pageNumber);

  if (!pageData) {
    return (
      <SafeAreaWrapper backgroundColor={colors.primary}>
        <View style={styles.container} />
      </SafeAreaWrapper>
    );
  }

  // ── Continued page ─────────────────────────────────────────────────────────
  if (pageData.pageType === 'continued') {
    return (
      <SafeAreaWrapper backgroundColor={colors.primary}>
        <View style={styles.pageContainer}>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.continuedScrollContent}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.continuedHeader}>Continued...</Text>
            {pageData.continuedText ? (
              <View style={styles.continuedBubble}>
                <Text style={styles.continuedText}>{pageData.continuedText}</Text>
                {pageData.continuedTagline ? (
                  <Text style={styles.continuedTagline}>{pageData.continuedTagline}</Text>
                ) : null}
              </View>
            ) : null}
            {pageData.continuedQRCodes && pageData.continuedQRCodes.length > 0 && (
              <QRRow codes={pageData.continuedQRCodes} />
            )}
          </ScrollView>
          <View style={styles.footer}>
            <Text style={styles.footerHandle}>@ A N I T A</Text>
            <Text style={styles.footerPageNumber}>{pageNumber}</Text>
          </View>
        </View>
      </SafeAreaWrapper>
    );
  }

  // ── Answers page ───────────────────────────────────────────────────────────
  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <View style={styles.pageContainer}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.answersScrollContent}
          showsVerticalScrollIndicator={false}
        >
          {(pageData.answers ?? []).map((block, i) => (
            <Answer key={i} block={block} />
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerHandle}>@ A N I T A</Text>
          <Text style={styles.footerPageNumber}>{pageNumber}</Text>
        </View>
      </View>
    </SafeAreaWrapper>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────
const CIRCLE_SIZE = moderateScale(44);
const CIRCLE_RADIUS = CIRCLE_SIZE / 2;
const BUBBLE_OVERLAP = moderateScale(14);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // outer wrapper so footer sits outside the scroll area
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  // answers pages: gap spaces blocks consistently; flexGrow:1 fills screen on short pages
  answersScrollContent: {
    flexGrow: 1,
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(16),
    gap: moderateScale(24),
  },
  // continued pages: natural top-down flow, footer always outside
  continuedScrollContent: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(8),
  },

  // ── Answer block ────────────────────────────────────────────────────────────
  answerBlock: {},
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
    marginLeft: -BUBBLE_OVERLAP,
    paddingLeft: BUBBLE_OVERLAP + moderateScale(8),
  },
  bubbleEven: {
    marginRight: -BUBBLE_OVERLAP,
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

  // ── RIP note ────────────────────────────────────────────────────────────────
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

  // ── Continued page ──────────────────────────────────────────────────────────
  continuedHeader: {
    fontSize: scaleFont(13),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#000',
    marginBottom: moderateScale(12),
  },
  continuedBubble: {
    backgroundColor: '#EBEBEB',
    borderRadius: moderateScale(10),
    padding: moderateScale(14),
    marginBottom: moderateScale(12),
  },
  continuedText: {
    fontSize: scaleFont(13),
    lineHeight: scaleFont(19),
    color: '#000',
    textAlign: 'justify',
  },
  continuedTagline: {
    fontSize: scaleFont(17),
    fontWeight: 'bold',
    color: colors.accent,
    marginTop: moderateScale(14),
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
