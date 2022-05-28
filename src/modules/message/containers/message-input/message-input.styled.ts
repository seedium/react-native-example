import styled from 'styled-components/native';
import { Box } from 'modules/core/components/box';

export const Root = styled(Box).attrs({
  color: 'white',
  paddingX: 'x3',
  paddingY: 'x2',
  border: {
    color: 'graySemiLight',
    width: {
      top: 1,
    },
  },
})``;

export const TextField = styled.TextInput`
  height: 36px;
  padding: 0 ${(props) => props.theme.spacing.x2}px;
  background-color: ${(props) => props.theme.colors.grayLight};
  border-radius: ${(props) => props.theme.shape.borderRadius.small}px;
`;
