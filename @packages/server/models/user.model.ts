import { ModelDefinition } from 'miragejs/-types';
import { Model } from 'miragejs';
import { User } from '@packages/chat-types/resources/user.types';

export const UserModel: ModelDefinition<User> = Model;
