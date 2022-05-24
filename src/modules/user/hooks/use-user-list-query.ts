import { useQuery } from 'react-query';
import { getUsersList } from '@api-client/user-api';
import { GetUsersListParams } from '@chat-types/api/user-api.types';

const USER_LIST_CACHE_KEY = 'USER_LIST';

export const useUserListQuery = (params?: GetUsersListParams) => {
  return useQuery(USER_LIST_CACHE_KEY, () => getUsersList(params));
};
