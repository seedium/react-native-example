import { useQuery, UseQueryOptions } from 'react-query';

const USER_ONLINE_CACHE_KEY = 'USER_ONLINE';

type Response = {
  isOnline: boolean;
};

export const useUserOnlineQuery = (
  idUser: string,
  options?: UseQueryOptions<Response, Error, Response, [string, string]>
) => {
  return useQuery<Response, Error, Response, [string, string]>(
    [USER_ONLINE_CACHE_KEY, idUser],
    () => {
      return fetch(`/api/users/${idUser}/online`).then((res) => res.json());
    },
    options
  );
};
