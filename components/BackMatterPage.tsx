import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Platform, useWindowDimensions } from 'react-native';
import { useFonts, GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';
import {
  getBackMatterPage,
  BackMatterBlock,
  Seg,
} from '../utils/backMatterPages';

interface BackMatterPageProps {
  pageNumber: number;
}

const SERIF = Platform.select({ ios: 'Georgia', android: 'serif', default: 'serif' });

// Decorative divider: a line on each side of a small diamond.
function Divider({ variant = 'diamond' }: { variant?: 'diamond' | 'pink' }) {
  const lineColor = variant === 'pink' ? colors.accent : colors.primary;
  return (
    <View style={styles.divider}>
      <View style={[styles.dividerLine, { backgroundColor: lineColor }]} />
      <View style={styles.diamond} />
      <View style={[styles.dividerLine, { backgroundColor: lineColor }]} />
    </View>
  );
}

function Segments({ segs, align, size }: { segs: Seg[]; align?: string; size?: number }) {
  const base = size ?? 14;
  return (
    <Text
      style={[
        styles.body,
        { fontSize: scaleFont(base), lineHeight: scaleFont(base * 1.5) },
        align === 'center' && { textAlign: 'center' },
        align === 'left' && { textAlign: 'left' },
      ]}
    >
      {segs.map((seg, i) => (
        <Text
          key={i}
          style={[
            seg.bold && styles.bold,
            seg.italic && styles.italic,
            seg.underline && styles.underline,
            seg.color ? { color: seg.color } : null,
            seg.size ? { fontSize: scaleFont(seg.size) } : null,
          ]}
        >
          {seg.text}
        </Text>
      ))}
    </Text>
  );
}

function Block({ block, contentW }: { block: BackMatterBlock; contentW: number }) {
  switch (block.type) {
    case 'title':
      return (
        <Text
          style={[
            styles.title,
            block.serif && { fontFamily: SERIF },
            block.italic && styles.italic,
            block.underline && styles.underline,
            block.color ? { color: block.color } : null,
            block.size ? { fontSize: scaleFont(block.size) } : null,
            block.letterSpacing ? { letterSpacing: block.letterSpacing } : null,
          ]}
        >
          {block.text}
        </Text>
      );

    case 'heading':
      return (
        <Text
          style={[
            styles.heading,
            block.italic && styles.italic,
            block.color ? { color: block.color } : null,
            block.size ? { fontSize: scaleFont(block.size), lineHeight: scaleFont(block.size * 1.4) } : null,
          ]}
        >
          {block.text}
        </Text>
      );

    case 'divider':
      return <Divider variant={block.variant} />;

    case 'script':
      return (
        <Text
          style={[
            styles.script,
            block.color ? { color: block.color } : null,
            block.size ? { fontSize: scaleFont(block.size), lineHeight: scaleFont(block.size * 1.35) } : null,
            block.align === 'left' && { textAlign: 'left' },
          ]}
        >
          {block.text}
        </Text>
      );

    case 'body':
      return <Segments segs={block.segs} align={block.align} size={block.size} />;

    case 'image': {
      const w = contentW * ((block.widthPct ?? 100) / 100);
      return (
        <View style={styles.imageBlock}>
          <Image
            source={block.source}
            style={{
              width: w,
              height: w / block.aspectRatio,
              borderRadius: 6,
            }}
            resizeMode="cover"
          />
          {block.caption ? (
            <Text
              style={[
                styles.caption,
                block.captionItalic && styles.italic,
                block.captionColor ? { color: block.captionColor } : null,
              ]}
            >
              {block.caption}
            </Text>
          ) : null}
        </View>
      );
    }

    case 'imageRow': {
      // Shrink the row uniformly if its natural width would overflow the page,
      // so rows always fit on small devices.
      let h = moderateScale(block.height);
      const margins = block.items.length * 2 * moderateScale(4);
      const naturalW = block.items.reduce((sum, item) => sum + h * item.aspectRatio, 0);
      if (naturalW > contentW - margins) {
        h = (h * (contentW - margins)) / naturalW;
      }
      return (
        <View style={styles.imageRow}>
          {block.items.map((item, i) => (
            <View key={i} style={styles.imageRowCell}>
              <Image
                source={item.source}
                style={{ height: h, width: h * item.aspectRatio, borderRadius: 4 }}
                resizeMode="contain"
              />
              {item.caption ? (
                <Text
                  style={[
                    styles.caption,
                    { maxWidth: Math.max(h * item.aspectRatio, moderateScale(140)) },
                    block.captionItalic && styles.italic,
                    item.captionColor ? { color: item.captionColor } : null,
                  ]}
                >
                  {item.caption}
                </Text>
              ) : null}
            </View>
          ))}
        </View>
      );
    }

    case 'photoGrid': {
      const columns = block.columns ?? 2;
      const gutter = moderateScale(columns === 3 ? 10 : 14);
      const cellW = (contentW - gutter * (columns - 1)) / columns;
      return (
        <View style={styles.grid}>
          {block.photos.map((photo, i) => (
            <View key={i} style={[styles.gridCell, { width: cellW }]}>
              <Image
                source={photo.source}
                style={{ width: cellW, height: cellW / block.aspectRatio, borderRadius: 6 }}
                resizeMode="cover"
              />
              {photo.caption ? (
                <Text style={styles.caption}>{photo.caption}</Text>
              ) : null}
            </View>
          ))}
        </View>
      );
    }

    case 'nameList': {
      const columns = block.columns ?? 1;
      return (
        <View style={columns === 2 ? styles.nameGrid : undefined}>
          {block.names.map((name, i) => (
            <Text
              key={i}
              style={[
                styles.nameItem,
                columns === 2 && { width: '50%' },
                block.italic && styles.italic,
                block.color ? { color: block.color } : null,
                block.size
                  ? { fontSize: scaleFont(block.size), lineHeight: scaleFont(block.size * 1.45) }
                  : null,
              ]}
            >
              {name}
            </Text>
          ))}
        </View>
      );
    }

    case 'spacer':
      return <View style={{ height: moderateScale(block.height ?? 16) }} />;

    default:
      return null;
  }
}

export default function BackMatterPage({ pageNumber }: BackMatterPageProps) {
  const [fontsLoaded] = useFonts({ GreatVibes_400Regular });
  const pageData = getBackMatterPage(pageNumber);
  // Content width: window minus the horizontal page padding. Images are sized
  // numerically from this (percentage width + aspectRatio is unreliable here).
  const { width: windowWidth } = useWindowDimensions();
  const contentW = windowWidth - 2 * moderateScale(26);

  if (!fontsLoaded || !pageData) {
    return (
      <SafeAreaWrapper backgroundColor={colors.primary}>
        <View style={styles.container} />
      </SafeAreaWrapper>
    );
  }

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {pageData.blocks.map((block, i) => (
            <Block key={i} block={block} contentW={contentW} />
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
    paddingHorizontal: moderateScale(26),
    paddingTop: moderateScale(36),
    paddingBottom: moderateScale(24),
  },
  title: {
    fontSize: scaleFont(24),
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(12),
  },
  heading: {
    fontSize: scaleFont(16),
    lineHeight: scaleFont(23),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: moderateScale(12),
  },
  script: {
    fontFamily: 'GreatVibes_400Regular',
    fontSize: scaleFont(28),
    lineHeight: scaleFont(38),
    color: colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(12),
  },
  body: {
    fontSize: scaleFont(14),
    lineHeight: scaleFont(21),
    color: '#000',
    textAlign: 'justify',
    marginBottom: moderateScale(14),
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  caption: {
    fontSize: scaleFont(11.5),
    lineHeight: scaleFont(16),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: moderateScale(7),
  },
  imageBlock: {
    alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  imageRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginBottom: moderateScale(16),
  },
  imageRowCell: {
    alignItems: 'center',
    marginHorizontal: moderateScale(4),
    marginBottom: moderateScale(8),
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: moderateScale(4),
  },
  gridCell: {
    alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  nameGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nameItem: {
    fontSize: scaleFont(12.5),
    lineHeight: scaleFont(19),
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: moderateScale(4),
  },

  // ── Divider ────────────────────────────────────────────────────────────────
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
