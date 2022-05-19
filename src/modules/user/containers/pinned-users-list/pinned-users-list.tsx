import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
// components
import { PinnedUserCard } from 'modules/user/components/pinned-user-card/pinned-user-card';
// hooks
import { useUserListQuery } from 'modules/user/hooks/use-user-list-query';
// types
import type { User } from 'modules/user/types/user.types';

import type { PinnedUsersListProps } from './pinned-users-list.interface';
import { styles } from './pinned-users-list.styled';

const PinnedUsersList: FC<PinnedUsersListProps> = () => {
  const userListQuery = useUserListQuery();

  const renderItem: ListRenderItem<User> = useCallback(({ item }) => {
    return <PinnedUserCard user={item} />;
  }, []);

  return (
    <FlatList<User>
      renderItem={renderItem}
      data={userListQuery.data?.list ?? []}
      style={styles.root}
      ListHeaderComponent={<View style={{ width: 24 }} />}
      ListFooterComponent={<View style={{ width: 24 }} />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
      }}
      horizontal
    />
  );
};

export { PinnedUsersList };
