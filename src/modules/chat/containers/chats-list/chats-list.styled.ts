import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
// utils
import { hPx } from 'styles/pixel-ratio';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    padding: hPx(24),
  },
});

export const Separator = styled.View`
  height: 16px;
`;
