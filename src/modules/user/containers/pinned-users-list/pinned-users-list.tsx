import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';
import { USER_PINNED, User } from '@chat-types/resources/user.types';
// components
import { PinnedUserCard } from 'modules/user/components/pinned-user-card/pinned-user-card';
import { Typography } from 'modules/core/components/typography';
import { Icon } from 'modules/core/components/icon';
// hooks
import { useUserListQuery } from 'modules/user/hooks/use-user-list-query';
// types
// utils
import { hPx } from 'styles/pixel-ratio';

import type { PinnedUsersListProps } from './pinned-users-list.interface';
import { EndPadding, HeaderWrapper, styles } from './pinned-users-list.styled';

const PinnedUsersList: FC<PinnedUsersListProps> = () => {
  const theme = useTheme();
  const userListQuery = useUserListQuery({
    filter: {
      pinned: USER_PINNED.PINNED,
    },
  });

  const renderItem: ListRenderItem<User> = useCallback(({ item }) => {
    return <PinnedUserCard user={item} />;
  }, []);

  return (
    <FlatList<User>
      style={styles.root}
      contentContainerStyle={styles.content}
      renderItem={renderItem}
      data={userListQuery.data?.list ?? []}
      keyExtractor={(user) => user.id}
      ListHeaderComponent={
        <HeaderWrapper>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: hPx(56),
              height: hPx(56),
              borderColor: theme.colors.gray,
              borderWidth: 2,
              borderRadius: hPx(14),
            }}
          >
            <Icon
              name='plus'
              color={theme.colors.gray}
              width={24}
              height={24}
            />
          </TouchableOpacity>
          <Typography
            variant='small'
            style={{
              color: theme.colors.dark,
              textAlign: 'center',
              fontWeight: '400',
              marginTop: hPx(4),
            }}
          >
            Pin favorite
          </Typography>
        </HeaderWrapper>
      }
      ListFooterComponent={<EndPadding />}
      showsHorizontalScrollIndicator={false}
      horizontal
    />
  );
};

export { PinnedUsersList };
