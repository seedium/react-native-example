import { User } from '@packages/chat-types/resources/user.types';
import { ListResponse } from './base-api.types';

export type GetUsersListParams = {
  filter?: Partial<Pick<User, 'pinned'>>;
};

export type GetUsersListResponse = ListResponse<User>;
