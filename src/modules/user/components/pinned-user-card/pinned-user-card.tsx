import React, { FC } from 'react';
// components
import { Avatar } from 'modules/user/components/avatar';
// hooks
import { useUserOnlineQuery } from 'modules/user/hooks/use-user-online-query';

import type { PinnedUserCardProps } from './pinned-user-card.interface';
import { Root, Name } from './pinned-user-card.styled';

const PinnedUserCard: FC<PinnedUserCardProps> = ({ user }) => {
  const onlineInfo = useUserOnlineQuery(user.id);

  return (
    <Root>
      <Avatar
        uri={user.avatar}
        isOnline={Boolean(onlineInfo.data?.isOnline)}
        name={user.firstName}
      />
      <Name>{user.firstName}</Name>
    </Root>
  );
};

export { PinnedUserCard };
