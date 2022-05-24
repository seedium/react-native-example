import React, { FC } from 'react';

import type { ScreenLayoutProps } from './screen-layout.interface';
import { Root } from './screen-layout.styled';
import { useTheme } from 'styled-components/native';

const ScreenLayout: FC<ScreenLayoutProps> = ({ color = 'white', children }) => {
  const theme = useTheme();
  return (
    <Root
      style={{
        backgroundColor: theme.colors[color],
      }}
    >
      {children}
    </Root>
  );
};

export { ScreenLayout };
