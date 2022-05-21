import { StyleSheet } from 'react-native';
import { hPx, wPx } from 'styles/pixel-ratio';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  root: {
    flexGrow: 0,
    width: '100%',
    backgroundColor: '#f7f7fc',
  },
  content: {
    alignItems: 'flex-end',
    paddingBottom: hPx(16),
    paddingTop: hPx(16),
  },
});

export const EndPadding = styled.View`
  width: ${wPx(24)}px;
`;

export const HeaderWrapper = styled.View`
  align-items: center;
  padding-left: ${wPx(24)}px;
  margin-right: ${wPx(10)}px;
`;
