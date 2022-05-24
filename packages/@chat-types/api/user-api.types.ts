import type { User } from '../resources/user.types';
import type { ListResponse } from './base-api.types';

export type GetUsersListParams = {
  filter?: Partial<Pick<User, 'pinned'>>;
};

export type GetUsersListResponse = ListResponse<User>;
