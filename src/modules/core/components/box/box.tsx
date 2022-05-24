import React, { FC, useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { pipe } from 'fp-ts/function';
// utils
import { hPx, wPx } from 'styles/pixel-ratio';

import type { BoxProps } from './box.interface';
import { Root } from './box.styled';

const Box: FC<BoxProps> = ({
  style,
  color,
  paddingX,
  paddingY,
  padding,
  children,
  border,
}) => {
  const theme = useTheme();
  // memo
  const propStyle = useMemo<ViewStyle>(() => {
    return pipe(
      {} as ViewStyle,
      (s) => {
        // inject background color
        if (color) {
          return {
            ...s,
            backgroundColor: theme.colors[color],
          };
        }

        return s;
      },
      (s) => {
        // inject vertical paddings
        if (paddingX) {
          return {
            ...s,
            paddingLeft: wPx(theme.spacing[paddingX]),
            paddingRight: wPx(theme.spacing[paddingX]),
          };
        }

        return s;
      },
      (s) => {
        // inject horizontal paddings
        if (paddingY) {
          return {
            ...s,
            paddingTop: hPx(theme.spacing[paddingY]),
            paddingBottom: hPx(theme.spacing[paddingY]),
          };
        }

        return s;
      },
      (s) => {
        // overwrite paddings if defined
        if (padding) {
          return {
            ...s,
            paddingTop: hPx(theme.spacing[padding]),
            paddingBottom: hPx(theme.spacing[padding]),
            paddingLeft: wPx(theme.spacing[padding]),
            paddingRight: wPx(theme.spacing[padding]),
          };
        }

        return s;
      },
      (s) => {
        // inject border
        if (border) {
          if (typeof border.width === 'number') {
            return {
              ...s,
              borderColor: theme.colors[border.color ?? 'gray'],
              borderWidth: border.width,
            };
          } else if (typeof border.width === 'object') {
            return {
              ...s,
              borderColor: theme.colors[border.color ?? 'gray'],
              borderTopWidth: border.width.top,
              borderBottomWidth: border.width.bottom,
              borderLeftWidth: border.width.left,
              borderRightWidth: border.width.right,
            };
          }
        }

        return s;
      }
    );
  }, [theme, paddingX, paddingY, padding, border, color]);

  return <Root style={[style, propStyle]}>{children}</Root>;
};

export { Box };
