import { AnyFactories, Registry } from 'miragejs/-types';
import { Server } from 'miragejs/server';
import { pipe } from 'fp-ts/function';
import { GetChatsListResponse } from '@packages/chat-types/api/chat-api.types';
import { ChatIncludedDisplayInfo } from '@packages/chat-types/resources/chat.types';
// models
import { models } from '../models/models';

export const chatRoutes = (
  server: Server<Registry<typeof models, AnyFactories>>
): void => {
  server.get<GetChatsListResponse>('/chats/list', (schema) => {
    return pipe(
      schema.all('chat').models,
      (chats) => {
        // include user
        const users = schema.all('user').models;

        return chats.map((chat) => ({
          ...chat,
          // @ts-ignore
          user: users.find((user) => user.id === chat.userId),
        }));
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
