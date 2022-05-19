import { useQuery } from 'react-query';
import { User } from '../types/user.types';

const USER_LIST_CACHE_KEY = 'USER_LIST';

export const useUserListQuery = () => {
  return useQuery<{ list: User[] }>(USER_LIST_CACHE_KEY, () => {
    return fetch('/api/users/list').then((res) => res.json());
  });
};
