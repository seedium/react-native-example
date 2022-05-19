import { createServer } from 'miragejs';
import { Server } from 'miragejs/server';
import {
  AnyFactories,
  AnyModels,
  Registry as MirageRegistry,
} from 'miragejs/-types';
// data
import { usersList } from './resources/users-list';

declare var window:
  | {
      server: Server<MirageRegistry<AnyModels, AnyFactories>>;
      shutdown: () => void;
    }
  | { server: undefined };

export const createApiServer = () => {
  if (window.server) {
    window.shutdown();
  }

  window.server = createServer({
    routes() {
      this.get('/api/users/list', () => {
        return {
          list: usersList,
        };
      });
    },
  });
};
