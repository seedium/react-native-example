import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import type { ChatIncludedDisplayInfo } from '@chat-types/resources/chat.types';
// components
import { ChatCard } from 'modules/chat/components/chat-card';
// hooks
import { useChatsListQuery } from 'modules/chat/hooks/use-chats-list-query';
// utils

import type { ChatsListProps } from './chats-list.interface';
import { styles, Separator } from './chats-list.styled';

const ChatsList: FC<ChatsListProps> = () => {
  const chatsListQuery = useChatsListQuery({});

  const renderItem: ListRenderItem<ChatIncludedDisplayInfo> = useCallback(
    ({ item }) => {
      return (
        <ChatCard
          chatId={item.id}
          user={item.user}
          message={item.lastMessage}
        />
      );
    },
    []
  );

  return (
    <FlatList<ChatIncludedDisplayInfo>
      style={styles.root}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      data={chatsListQuery.data?.list ?? []}
      ItemSeparatorComponent={Separator}
      keyExtractor={(chat) => chat.id}
    />
  );
};

export { ChatsList };
