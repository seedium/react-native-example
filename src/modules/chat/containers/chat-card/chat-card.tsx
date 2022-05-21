import React, { FC } from 'react';
import faker from '@faker-js/faker';
// components
import { Avatar } from 'modules/user/components/avatar';
// hooks
// types

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

const ChatCard: FC<ChatCardProps> = () => {
  return (
    <Root>
      <Avatar uri={faker.image.avatar()} isOnline={faker.datatype.boolean()} />
      <Info>
        <InfoTop>
          <Title>{faker.name.firstName()}</Title>
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
