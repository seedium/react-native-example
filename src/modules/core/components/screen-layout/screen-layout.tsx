import React, { FC } from 'react';
import { useTheme } from 'styled-components/native';

import type { ScreenLayoutProps } from './screen-layout.interface';
import { Root } from './screen-layout.styled';

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
