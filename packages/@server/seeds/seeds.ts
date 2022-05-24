import { Server } from 'miragejs/server';
import { usersList } from './users-list';
import { models } from '../models/models';
import { chatsList } from '../seeds/chats-list';
import { messagesList } from '../seeds/messages-list';
import type { AnyFactories, Registry } from 'miragejs/-types';

export const seeds = (
  server: Server<Registry<typeof models, AnyFactories>>
): void => {
  usersList.forEach((user) => {
    server.create('user', user);
  });
  chatsList.forEach((chat) => {
    server.create('chat', chat);
  });
  messagesList.forEach((message) => {
    server.create('message', message);
  });
};
