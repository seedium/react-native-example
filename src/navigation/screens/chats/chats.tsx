import React, { FC } from 'react';
// components
import { ScreenLayout } from 'modules/core/components/screen-layout';
import { PinnedUsersList } from 'modules/user/containers/pinned-users-list';

const Chats: FC = () => {
  return (
    <ScreenLayout>
      <PinnedUsersList />
    </ScreenLayout>
  );
};

export { Chats };
