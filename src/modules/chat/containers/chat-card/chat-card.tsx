import React, { FC } from 'react';
import faker from '@faker-js/faker';
// components
import { Avatar } from 'modules/user/components/avatar';
// hooks
import { useUserOnlineQuery } from 'modules/user/hooks/use-user-online-query';

import type { ChatCardProps } from './chat-card.interface';
import {
  Root,
  Info,
  InfoTop,
  InfoBottom,
  Title,
  Time,
  MessagePreview,
} from './chat-card.styled';

const ChatCard: FC<ChatCardProps> = ({ user }) => {
  const userOnlineQuery = useUserOnlineQuery(user.id);

  return (
    <Root>
      <Avatar
        uri={user.avatar}
        isOnline={Boolean(userOnlineQuery.data?.isOnline)}
      />
      <Info>
        <InfoTop>
          <Title>{user.firstName + ' ' + user.lastName}</Title>
          <Time>3m ago</Time>
        </InfoTop>
        <InfoBottom>
          <MessagePreview>{faker.lorem.sentence()}</MessagePreview>
        </InfoBottom>
      </Info>
    </Root>
  );
};

export { ChatCard };
