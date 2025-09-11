import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Base dimensions (iPhone 14 Pro Max as reference)
const baseWidth = 414;
const baseHeight = 896;

// Scale function for width-based scaling
export const scaleWidth = (size: number): number => {
  const scale = SCREEN_WIDTH / baseWidth;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Scale function for height-based scaling
export const scaleHeight = (size: number): number => {
  const scale = SCREEN_HEIGHT / baseHeight;
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Scale function for font sizes (uses width scaling with better limits)
export const scaleFont = (size: number): number => {
  const scale = SCREEN_WIDTH / baseWidth;
  // Better scaling limits for smaller devices
  const minScale = 0.9;
  const maxScale = 1.15;
  const finalScale = Math.max(minScale, Math.min(maxScale, scale));
  return Math.round(PixelRatio.roundToNearestPixel(size * finalScale));
};

// Moderate scale - better for spacing and padding with device-specific adjustments
export const moderateScale = (size: number, factor: number = 0.5): number => {
  const scale = SCREEN_WIDTH / baseWidth;
  // Adjust factor based on device size to prevent over-scaling
  const adjustedFactor = SCREEN_WIDTH < 375 ? factor * 0.7 : factor;
  const newSize = size + (scale - 1) * adjustedFactor * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

// Device type detection (more precise for iPhone models)
export const isSmallDevice = (): boolean => SCREEN_WIDTH <= 375; // iPhone SE, iPhone 12 mini
export const isMediumDevice = (): boolean =>
  SCREEN_WIDTH > 375 && SCREEN_WIDTH < 414; // iPhone 14 Pro (393px)
export const isLargeDevice = (): boolean => SCREEN_WIDTH >= 414; // iPhone 14 Pro Max and larger
export const isTablet = (): boolean => SCREEN_WIDTH >= 768;

// Screen dimensions
export const screenData = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  isSmall: isSmallDevice(),
  isMedium: isMediumDevice(),
  isLarge: isLargeDevice(),
  isTablet: isTablet(),
};

// Responsive values based on device type
export const getResponsiveValue = (
  small: number,
  medium: number,
  large: number,
  tablet?: number
): number => {
  if (isTablet() && tablet !== undefined) return tablet;
  if (isSmallDevice()) return small;
  if (isMediumDevice()) return medium;
  return large;
};

// Global scale factor for container-level scaling
export const getGlobalScale = (): number => {
  const scale = SCREEN_WIDTH / baseWidth;
  // Limit scaling to prevent too much distortion
  const minScale = 0.85;
  const maxScale = 1.15;
  return Math.max(minScale, Math.min(maxScale, scale));
};

// Container scaling transform - applies to entire page containers
export const getScaleTransform = () => {
  const scale = getGlobalScale();
  return {
    transform: [{ scale }],
  };
};

// Responsive container styles
export const getResponsiveContainer = (baseStyles: any = {}) => {
  const scale = getGlobalScale();
  return {
    ...baseStyles,
    transform: [{ scale }],
    // Adjust margins to prevent content from being cut off
    marginVertical: scale < 1 ? (1 - scale) * 20 : 0,
  };
};
