import { createServer } from 'miragejs';
import { Server } from 'miragejs/server';
import {
  AnyFactories,
  AnyModels,
  Registry as MirageRegistry,
} from 'miragejs/-types';
import faker from '@faker-js/faker';
// data
import { usersList } from './resources/users-list';

declare var window:
  | {
      server: Server<MirageRegistry<AnyModels, AnyFactories>>;
      shutdown: () => void;
    }
  | { server: undefined };

export const createApiServer = () => {
  if (window.server && typeof window.shutdown === 'function') {
    window.shutdown();
  }

  window.server = createServer({
    routes() {
      this.namespace = '/api';

      this.get('/users/list', () => {
        return {
          list: usersList,
        };
      });
      this.get('/users/:id/online', () => {
        return {
          isOnline: faker.datatype.boolean(),
        };
      });
    },
  });
};
