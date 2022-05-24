import { stringify } from 'qs';
import type {
  GetUsersListParams,
  GetUsersListResponse,
} from '@chat-types/api/user-api.types';

export const getUsersList = (
  params?: GetUsersListParams
): Promise<GetUsersListResponse> => {
  const query = params ? `?${stringify(params)}` : '';

  return fetch(`/api/users/list${query}`).then((res) => res.json());
};
