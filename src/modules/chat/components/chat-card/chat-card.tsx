import React, { FC, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
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

const ChatCard: FC<ChatCardProps> = ({ chatId, user, message }) => {
  const navigation = useNavigation<any>();
  // queries
  const userOnlineQuery = useUserOnlineQuery(user.id);

  const handleChatPress = useCallback(() => {
    navigation.navigate('chat', {
      chatId,
    });
  }, [navigation, chatId]);

  return (
    <Root onPress={handleChatPress}>
      <Avatar
        uri={user.avatar}
        name={user.firstName}
        isOnline={Boolean(userOnlineQuery.data?.isOnline)}
      />
      <Info>
        <InfoTop>
          <Title>{user.firstName + ' ' + user.lastName}</Title>
          {!!message && <Time>{message.updatedAt}</Time>}
        </InfoTop>
        <InfoBottom>
          {!!message && <MessagePreview>{message.text}</MessagePreview>}
        </InfoBottom>
      </Info>
    </Root>
  );
};

export { ChatCard };
