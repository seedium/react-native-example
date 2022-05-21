import { createServer } from 'miragejs';
import { Server } from 'miragejs/server';
import {
  AnyFactories,
  AnyModels,
  Registry as MirageRegistry,
} from 'miragejs/-types';
// models
import { models } from './models/models';
// seeds
import { seeds } from './seeds/seeds';
// routes
import { routes } from './routes/routes';

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

  window.server = createServer<typeof models, AnyFactories>({
    models,
    seeds,
    routes,
  });
};
