import React, { FC } from 'react';
// components
import { SafeAreaView } from 'modules/core/components/safe-area-view';

import type { ScreenLayoutProps } from './screen-layout.interface';

const ScreenLayout: FC<ScreenLayoutProps> = ({ children }) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export { ScreenLayout };
