import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
// components
import { Icon } from 'modules/core/components/icon';
// utils
import { hPx } from 'styles/pixel-ratio';

import type { HeaderProps } from './header.interface';
import { Root, Title, BackButton } from './header.styled';

const Header: FC<HeaderProps> = ({ name, displayBackButton = false, box }) => {
  const navigation = useNavigation();

  return (
    <Root box={box}>
      {displayBackButton && (
        <BackButton onPress={navigation.goBack}>
          <Icon name='arrowLeft' width={hPx(24)} height={hPx(24)} />
        </BackButton>
      )}
      <Title>{name}</Title>
    </Root>
  );
};

export { Header };
