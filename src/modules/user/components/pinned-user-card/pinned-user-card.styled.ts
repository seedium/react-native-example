import styled from 'styled-components/native';
// components
import { Typography } from 'modules/core/components/typography';
// utils
import { hPx, wPx } from 'styles/pixel-ratio';

export const Root = styled.View`
  width: ${hPx(56)}px;
  margin-right: ${wPx(10)}px;
  align-items: center;
`;

export const Name = styled(Typography).attrs({
  variant: 'small',
  numberOfLines: 1,
})`
  color: ${(props) => props.theme.colors.dark};
  font-weight: 400;
  text-align: center;
  margin-top: ${hPx(8)}px;
`;
