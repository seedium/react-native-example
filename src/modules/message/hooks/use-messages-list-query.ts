import { useQuery, UseQueryOptions } from 'react-query';
import { getMessagesList } from '@api-client/message-api';
import {
  GetMessagesListParams,
  GetMessagesListResponse,
} from '@chat-types/api/message-api.types';

const MESSAGES_LIST_CACHE_KEY = 'MESSAGES_LIST';

export const useMessagesListQuery = (
  params: GetMessagesListParams,
  options?: UseQueryOptions<
    GetMessagesListResponse,
    Error,
    GetMessagesListResponse,
    [string, GetMessagesListParams]
  >
) => {
  return useQuery(
    [MESSAGES_LIST_CACHE_KEY, params],
    () => getMessagesList(params),
    options
  );
};
