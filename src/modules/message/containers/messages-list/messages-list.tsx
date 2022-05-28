import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
// components
import { MessageCard } from 'modules/message/components/message-card';
import { DateMessagesSeparator } from 'modules/message/components/date-messages-separator';
// hooks
import { useMessagesListQuery } from 'modules/message/hooks/use-messages-list-query';
// types
import type { MessageIncludedDisplayInfo } from '@chat-types/resources/message.types';

import type { MessagesListProps } from './messages-list.interface';
import { styles } from './messages-list.styled';

const MessagesList: FC<MessagesListProps> = ({ chatId }) => {
  // queries
  const messagesListQuery = useMessagesListQuery({ chatId });

  const renderItem: ListRenderItem<MessageIncludedDisplayInfo> = useCallback(
    ({ item }) => <MessageCard key={item.id} message={item} />,
    []
  );

  return (
    <FlatList<MessageIncludedDisplayInfo>
      style={styles.root}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
      data={messagesListQuery.data?.list ?? []}
      ItemSeparatorComponent={DateMessagesSeparator}
      keyExtractor={(message) => message.id}
      inverted
    />
  );
};

export { MessagesList };
