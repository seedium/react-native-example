import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

export type IconName = 'plus';

export type IconProps = {
  name: IconName;
} & SvgProps;

export type IconsMap = Record<IconName, FC<SvgProps>>;
