import { Server } from 'miragejs/server';
import { AnyFactories, Registry } from 'miragejs/-types';
// models
import { models } from '../models/models';
// routes
import { userRoutes } from './user.routes';

export function routes(this: Server<Registry<typeof models, AnyFactories>>) {
  this.namespace = '/api';

  userRoutes(this);
}
