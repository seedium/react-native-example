import React, { FC } from 'react';
import { Avatar as UIAvatar } from 'react-native-ui-lib';
import { BadgePosition } from 'react-native-ui-lib/src/components/avatar';
// utils
import { hPx } from 'styles/pixel-ratio';

import type { AvatarProps } from './avatar.interface';

const Avatar: FC<AvatarProps> = ({ uri }) => {
  return (
    <UIAvatar
      animate={true}
      size={hPx(48)}
      containerStyle={{ width: hPx(56), height: hPx(56) }}
      imageStyle={{ borderRadius: hPx(10), margin: hPx(4) }}
      badgeProps={{
        label: '',
        backgroundColor: '#2CC069',
        size: hPx(12),
        borderWidth: hPx(2),
        borderColor: '#fff',
      }}
      source={{ uri }}
      badgePosition={BadgePosition.BOTTOM_RIGHT}
    />
  );
};

export { Avatar };
