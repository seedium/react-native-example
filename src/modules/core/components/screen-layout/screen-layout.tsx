import React, { FC } from 'react';

import type { ScreenLayoutProps } from './screen-layout.interface';
import { Root } from './screen-layout.styled';

const ScreenLayout: FC<ScreenLayoutProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export { ScreenLayout };
