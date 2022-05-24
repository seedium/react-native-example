import { Model } from 'miragejs';
import type { ModelDefinition } from 'miragejs/-types';
import type { User } from '@chat-types/resources/user.types';

export const UserModel: ModelDefinition<User> = Model;
