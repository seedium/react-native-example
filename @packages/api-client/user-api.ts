import { stringify } from 'qs';
import {
  GetUsersListParams,
  GetUsersListResponse,
} from '@packages/chat-types/api/user-api.types';

export const getUsersList = (
  params?: GetUsersListParams
): Promise<GetUsersListResponse> => {
  const query = params ? `?${stringify(params)}` : '';

  return fetch(`/api/users/list${query}`).then((res) => res.json());
};
