import React, { FC, memo } from 'react';
// icons
import Plus from 'assets/icons/plus.svg';
import ArrowLeft from 'assets/icons/arrow-left.svg';

import type { IconProps, IconsMap } from './icon.interface';

export const icons: IconsMap = {
  plus: Plus,
  arrowLeft: ArrowLeft,
};

const Icon: FC<IconProps> = memo(({ name, ...props }) => {
  const SVGIcon = icons[name];

  if (!SVGIcon) {
    console.warn(`Icon "${name}" does not exist`);

    return null;
  }

  return <SVGIcon {...props} />;
});

export { Icon };
