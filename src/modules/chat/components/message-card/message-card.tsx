import React, { FC } from 'react';

import type { MessageCardProps } from './message-card.interface';
import { Root, Text, Time } from './message-card.styled';

const MessageCard: FC<MessageCardProps> = ({ message }) => {
  return (
    <Root isMy={message.isMy}>
      <Text isMy={message.isMy}>{message.text}</Text>
      <Time isMy={message.isMy}>18:31</Time>
    </Root>
  );
};

export { MessageCard };
