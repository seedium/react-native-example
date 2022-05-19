import styled from 'styled-components/native';
import { hPx } from 'styles/pixel-ratio';

export const Root = styled.View`
  width: ${hPx(56)}px;
  margin-right: 10px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  color: #0f1828;
  text-align: center;
  margin-top: 4px;
`;
