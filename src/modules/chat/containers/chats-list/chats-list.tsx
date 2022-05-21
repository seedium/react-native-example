import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
// components
import { ChatCard } from 'modules/chat/containers/chat-card';
// hooks
// utils
// types

import type { ChatsListProps } from './chats-list.interface';
import { styles, Separator } from './chats-list.styled';

const ChatsList: FC<ChatsListProps> = () => {
  const renderItem: ListRenderItem<any> = useCallback(() => {
    return <ChatCard />;
  }, []);

  return (
    <FlatList
      style={styles.root}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
      ItemSeparatorComponent={Separator}
    />
  );
};

export { ChatsList };
