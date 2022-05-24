import styled from 'styled-components/native';
import { hPx } from '../../../../styles/pixel-ratio';
import { Typography } from '../../../core/components/typography';
import { TouchableOpacity } from 'react-native';

export const Root = styled(TouchableOpacity)`
  flex-direction: row;
  height: ${hPx(56)}px;
  align-items: center;
`;

export const Info = styled.View`
  flex: 1;
  padding-left: 16px;
`;

export const InfoTop = styled.View`
  flex-direction: row;
`;

export const InfoBottom = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Title = styled(Typography).attrs({
  variant: 'subtitle',
  numberOfLines: 1,
})`
  color: ${(props) => props.theme.colors.dark};
`;

export const Time = styled(Typography).attrs({
  variant: 'body2',
})`
  color: ${(props) => props.theme.colors.gray};
  margin-left: auto;
`;

export const MessagePreview = styled(Typography).attrs({
  variant: 'body',
  numberOfLines: 1,
})`
  color: ${(props) => props.theme.colors.gray};
`;
