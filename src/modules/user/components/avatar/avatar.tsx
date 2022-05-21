import React, { FC, useMemo } from 'react';
import { useTheme } from 'styled-components/native';
import { Avatar as UIAvatar, BadgeProps } from 'react-native-ui-lib';
import { BadgePosition } from 'react-native-ui-lib/src/components/avatar';
// utils
import { hPx } from 'styles/pixel-ratio';

import type { AvatarProps } from './avatar.interface';
import { styles } from './avatar.styled';

const Avatar: FC<AvatarProps> = ({ uri, isOnline, name }) => {
  const theme = useTheme();
  // memo
  const badgeProps = useMemo<BadgeProps | undefined>(() => {
    if (isOnline) {
      return {
        label: '',
        backgroundColor: theme.colors.green,
        size: hPx(12),
        borderWidth: hPx(2),
        borderColor: theme.colors.white,
      };
    }
  }, [isOnline, theme]);
  // memo
  const avatarLabel = useMemo(() => {
    if (name?.length) {
      return name[0];
    }

    return 'U';
  }, [name]);

  return (
    <UIAvatar
      source={{ uri }}
      animate={true}
      size={hPx(48)}
      imageStyle={styles.imageStyle}
      label={avatarLabel}
      name={name}
      useAutoColors={true}
      autoColorsConfig={{
        avatarColors: ['#32D74B', '#64D2FF', '#0A84FF', '#5E5CE6', '#FFD60A'],
        defaultColor: theme.colors.gray,
      }}
      badgeProps={badgeProps}
      badgePosition={BadgePosition.BOTTOM_RIGHT}
    />
  );
};

export { Avatar };
