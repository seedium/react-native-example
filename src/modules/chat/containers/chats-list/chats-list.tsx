import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { ChatIncludedDisplayInfo } from '@packages/chat-types/resources/chat.types';
// components
import { ChatCard } from 'modules/chat/containers/chat-card';
// hooks
import { useChatsListQuery } from 'modules/chat/hooks/use-chats-list-query';
// utils

import type { ChatsListProps } from './chats-list.interface';
import { styles, Separator } from './chats-list.styled';

const ChatsList: FC<ChatsListProps> = () => {
  const chatsListQuery = useChatsListQuery({});

  const renderItem: ListRenderItem<ChatIncludedDisplayInfo> = useCallback(
    ({ item }) => {
      return <ChatCard user={item.user} />;
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
    />
  );
};

export { ChatsList };
