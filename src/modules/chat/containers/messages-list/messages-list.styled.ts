import { StyleSheet } from 'react-native';
// utils
import { hPx, wPx } from 'styles/pixel-ratio';
// theme
import { theme } from 'styles/theme';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.colors.grayLight,
  },
  container: {
    paddingTop: hPx(8),
    paddingBottom: hPx(8),
    paddingLeft: wPx(16),
    paddingRight: wPx(16),
  },
});
