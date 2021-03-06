import { Server } from 'miragejs/server';
import { AnyFactories, Registry } from 'miragejs/-types';
// models
import { models } from '../models/models';
// routes
import { userRoutes } from './user.routes';
import { chatRoutes } from '../routes/chat.routes';
import { messageRoutes } from '../routes/message.routes';

export function routes(this: Server<Registry<typeof models, AnyFactories>>) {
  this.namespace = '/api';

  userRoutes(this);
  chatRoutes(this);
  messageRoutes(this);
}
