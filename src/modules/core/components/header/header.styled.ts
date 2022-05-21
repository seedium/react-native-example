import styled from 'styled-components/native';
// utils
import { hPx, wPx } from 'styles/pixel-ratio';
import { Typography } from '../typography';

export const Root = styled.View`
  padding: ${hPx(10)}px ${wPx(24)}px ${hPx(14)}px ${wPx(24)}px;
`;

export const Title = styled(Typography).attrs({
  variant: 'title',
})`
  color: ${(props) => props.theme.colors.dark};
`;
