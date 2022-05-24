import type {
  GetChatsListParams,
  GetChatsListResponse,
} from '@chat-types/api/chat-api.types';
import { stringifyParams } from './utils';

export const getChatsList = (
  params: GetChatsListParams
): Promise<GetChatsListResponse> => {
  const query = stringifyParams(params);

  return fetch(`/api/chats/list${query}`).then((res) => res.json());
};
