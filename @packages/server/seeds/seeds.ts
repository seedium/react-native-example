import { AnyFactories, Registry } from 'miragejs/-types';
import { Server } from 'miragejs/server';
import { usersList } from './users-list';
// models
import { models } from '../models/models';
import { chatsList } from '@packages/server/seeds/chats-list';

export const seeds = (
  server: Server<Registry<typeof models, AnyFactories>>
): void => {
  usersList.forEach((user) => {
    server.create('user', user);
  });
  chatsList.forEach((chat) => {
    server.create('chat', chat);
  });
};
