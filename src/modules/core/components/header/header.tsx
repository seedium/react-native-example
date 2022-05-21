import React, { FC } from 'react';

import type { HeaderProps } from './header.interface';
import { Root, Title } from './header.styled';

const Header: FC<HeaderProps> = ({ name }) => {
  return (
    <Root>
      <Title>{name}</Title>
    </Root>
  );
};

export { Header };
