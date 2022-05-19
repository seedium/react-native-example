import React, { FC } from 'react';
// components
import { Avatar } from 'modules/user/components/avatar';

import type { PinnedUserCardProps } from './pinned-user-card.interface';
import { Root, Name } from './pinned-user-card.styled';

const PinnedUserCard: FC<PinnedUserCardProps> = ({ user }) => {
  return (
    <Root>
      <Avatar uri={user.avatar} />
      <Name>{user.firstName}</Name>
    </Root>
  );
};

export { PinnedUserCard };
