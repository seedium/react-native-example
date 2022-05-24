import { AnyFactories, Registry } from 'miragejs/-types';
import { Server } from 'miragejs/server';
import { pipe } from 'fp-ts/function';
import type { GetChatsListResponse } from '@chat-types/api/chat-api.types';
import type { ChatIncludedDisplayInfo } from '@chat-types/resources/chat.types';

import { models } from '../models/models';

export const chatRoutes = (
  server: Server<Registry<typeof models, AnyFactories>>
): void => {
  server.get<GetChatsListResponse>('/chats/list', (schema) => {
    return pipe(
      schema.all('chat').models.map((model) => model.attrs),
      (chats) => {
        // include user
        const users = schema.all('user').models.map((model) => model.attrs);

        return chats.map((chat) => ({
          ...chat,
          // @ts-ignore
          user: users.find((user) => user.id === chat.userId),
        }));
      },
      (chats) => {
        // include last message
        const messages = schema
          .all('message')
          .models.map((model) => model.attrs);

        return chats.map((chat) => {
          const chatMessages = messages.filter(function (message) {
            return message.chatId === chat.id;
          });
          if (chatMessages.length > 0) {
            const lastMessage = chatMessages.reduce(function (p, v) {
              return p.updatedAt > v.updatedAt ? p : v;
            });

            return {
              ...chat,
              lastMessage,
            };
          }

          return {
            ...chat,
          };
        });
      },
      (chats) => {
        return {
          list: chats as unknown as ChatIncludedDisplayInfo[],
          length: chats.length,
        };
      }
    );
  });
};
