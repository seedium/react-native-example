import React, { FC } from 'react';
// components
import { Header } from 'modules/core/components/header';
import { ScreenLayout } from 'modules/core/components/screen-layout';
// containers
import { MessagesList } from 'modules/chat/containers/messages-list';
import { MessageInput } from 'modules/chat/containers/message-input';

import type { ChatProps } from './chat.interface';

const Chat: FC<ChatProps> = ({ route }) => {
  return (
    <ScreenLayout>
      <Header
        name='Mike Kopyl'
        box={{
          paddingX: 'x3',
          border: {
            color: 'graySemiLight',
            width: {
              bottom: 1,
            },
          },
        }}
        displayBackButton
      />
      <MessagesList chatId={route.params.chatId} />
      <MessageInput />
    </ScreenLayout>
  );
};

export { Chat };
