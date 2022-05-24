import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
// components
import { Typography } from 'modules/core/components/typography';
import { Box } from 'modules/core/components/box';
// utils
import { hPx, wPx } from 'styles/pixel-ratio';
// types
import type { BoxProps } from 'modules/core/components/box/box.interface';

export const Root = styled(Box).attrs<{ box?: BoxProps }>(({ box }) => ({
  paddingX: 'x6',
  paddingY: 'x3',
  color: 'white',
  ...box,
}))<{ box?: BoxProps }>`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  variant: 'title',
})`
  color: ${(props) => props.theme.colors.dark};
`;

export const BackButton = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: ${hPx(24)}px;
  height: ${hPx(24)}px;
  margin-right: ${wPx(8)}px;
`;
