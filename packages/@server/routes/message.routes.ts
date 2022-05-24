import { parse } from 'qs';
import { Server } from 'miragejs/server';
import { pipe } from 'fp-ts/function';
import type { AnyFactories, Registry } from 'miragejs/-types';
import type { MessageIncludedDisplayInfo } from '@chat-types/resources/message.types';
import type { GetMessagesListResponse } from '@chat-types/api/message-api.types';
// models
import { models } from '../models/models';

export const messageRoutes = (
  server: Server<Registry<typeof models, AnyFactories>>
): void => {
  server.get<GetMessagesListResponse>('/messages/list', (schema, request) => {
    return pipe(
      schema.all('message').models.map((model) => model.attrs),
      (messages) => {
        if (!request.queryParams || !('chatId' in parse(request.queryParams))) {
          throw new Error('Chat id is required');
        }

        const chatId = parse(request.queryParams).chatId as string;

        // @ts-ignore
        return messages.filter((message) => message.chatId === chatId);
      },
      (messages) => {
        const me = schema.all('user').models[0];
        return messages.map((message) => ({
          ...message,
          isMy: message.userId === me.id,
        }));
      },
      (messages) => {
        return {
          list: messages as unknown as MessageIncludedDisplayInfo[],
          length: messages.length,
        };
      }
    );
  });
};
