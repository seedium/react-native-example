import faker from '@faker-js/faker';
import { AnyFactories, Registry } from 'miragejs/-types';
import { Server } from 'miragejs/server';
// models
import { models } from '../models/models';

export const userRoutes = (
  server: Server<Registry<typeof models, AnyFactories>>
): void => {
  server.get('/users/list', (schema) => {
    const users = schema.all('user').models;

    return {
      list: users,
      length: users.length,
    };
  });

  server.get('/users/:id/online', () => {
    return {
      isOnline: faker.datatype.boolean(),
    };
  });
};
