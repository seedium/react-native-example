import type { StyleProp, ViewStyle } from 'react-native';
import type { Theme } from 'styles/theme';

export type BoxProps = {
  style?: StyleProp<ViewStyle>;
  color?: keyof Theme['colors'];
  paddingX?: keyof Theme['spacing'];
  paddingY?: keyof Theme['spacing'];
  padding?: keyof Theme['spacing'];
  border?: {
    width?:
      | number
      | {
          top?: number;
          bottom?: number;
          left?: number;
          right?: number;
        };
    color?: keyof Theme['colors'];
  };
};
