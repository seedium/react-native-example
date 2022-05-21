import React, { FC } from 'react';
// components
import { ScreenLayout } from 'modules/core/components/screen-layout';
import { PinnedUsersList } from 'modules/user/containers/pinned-users-list';
import { Header } from 'modules/core/components/header';
import { ChatsList } from 'modules/chat/containers/chats-list';

const Chats: FC = () => {
  return (
    <ScreenLayout>
      <Header name='Chats' />
      <PinnedUsersList />
      <ChatsList />
    </ScreenLayout>
  );
};

export { Chats };
