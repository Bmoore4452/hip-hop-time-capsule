import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import SafeAreaWrapper from './SafeAreaWrapper';
import { scaleFont, moderateScale } from '../utils/responsive';
import { colors } from '../utils/colors';

interface AnitaScipioJourneyPageProps {
  pageNumber: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Builds SVG polygon point string for a star burst shape
function starPoints(cx: number, cy: number, outerR: number, innerR: number, numPoints: number): string {
  const pts: string[] = [];
  for (let i = 0; i < numPoints * 2; i++) {
    const angle = (i * Math.PI) / numPoints - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    pts.push(`${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`);
  }
  return pts.join(' ');
}

export default function AnitaScipioJourneyPage({ pageNumber }: AnitaScipioJourneyPageProps) {
  const burstSize = SCREEN_WIDTH * 0.82;
  const cx = burstSize / 2;
  const cy = burstSize / 2;

  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <View style={styles.container}>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <View style={styles.header}>
          <Text style={styles.titleText}>HIP-HOP TIME CAPSULE</Text>
          <Text style={styles.subtitleText}>Document Your Personal Journey</Text>
        </View>

        {/* ── Star burst + centered text ──────────────────────────────────── */}
        <View style={styles.burstWrapper}>
          <Svg width={burstSize} height={burstSize}>
            {/* Outer dark magenta burst — 12 spikes, high inner/outer contrast */}
            <Polygon
              points={starPoints(cx, cy, burstSize * 0.48, burstSize * 0.26, 12)}
              fill="#BD0080"
            />
            {/* Inner lighter pink burst — same spike count, smaller */}
            <Polygon
              points={starPoints(cx, cy, burstSize * 0.38, burstSize * 0.22, 12)}
              fill="#E030A8"
            />
          </Svg>

          {/* Text sits centered on top of the SVG */}
          <View style={[styles.burstTextOverlay, { width: burstSize, height: burstSize }]}>
            <Text style={styles.burstName}>ANITA SCIPIO</Text>
            <Text style={styles.burstJourney}>THIS IS MY JOURNEY</Text>
          </View>
        </View>

        {/* ── Page number ─────────────────────────────────────────────────── */}
        <Text style={styles.pageNumber}>{pageNumber}</Text>

      </View>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: moderateScale(28),
    paddingBottom: moderateScale(20),
    paddingHorizontal: moderateScale(16),
  },

  // ── Header ────────────────────────────────────────────────────────────────
  header: {
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: scaleFont(26),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitleText: {
    fontSize: scaleFont(15),
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginTop: moderateScale(6),
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  // ── Burst ─────────────────────────────────────────────────────────────────
  burstWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  burstTextOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  burstName: {
    fontSize: scaleFont(26),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0,0,0,0.9)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  burstJourney: {
    fontSize: scaleFont(16),
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: moderateScale(8),
    textShadowColor: 'rgba(0,0,0,0.9)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  pageNumber: {
    fontSize: scaleFont(14),
    color: '#fff',
  },
});
