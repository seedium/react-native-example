import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('screen');

const designHeight = 812;
const designWidth = 375;

const widthRatio = width / designWidth;
const heightRation = height / designHeight;

export const wPx = (size: number) => {
  return PixelRatio.roundToNearestPixel(size * widthRatio);
};

export const hPx = (size: number) => {
  return PixelRatio.roundToNearestPixel(size * heightRation);
};
