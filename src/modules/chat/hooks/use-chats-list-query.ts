import { useQuery } from 'react-query';
import { GetChatsListParams } from '@chat-types/api/chat-api.types';
import { getChatsList } from '@api-client/chat-api';

const CHATS_LIST_CACHE_KEY = 'CHATS_LIST';

export const useChatsListQuery = (params: GetChatsListParams) => {
  return useQuery([CHATS_LIST_CACHE_KEY, params], () => getChatsList(params));
};
