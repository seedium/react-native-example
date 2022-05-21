import { ModelDefinition } from 'miragejs/-types';
import { Model } from 'miragejs';
// types
import type { User } from 'modules/user/types/user.types';

export const UserModel: ModelDefinition<User> = Model;
