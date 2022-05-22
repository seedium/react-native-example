import { GetChatsListParams } from '@packages/chat-types/api/chat-api.types';
import { useQuery } from 'react-query';
import { getChatsList } from '@packages/api-client/chat-api';

const CHATS_LIST_CACHE_KEY = 'CHATS_LIST';

export const useChatsListQuery = (params: GetChatsListParams) => {
  return useQuery([CHATS_LIST_CACHE_KEY, params], () => getChatsList(params));
};
