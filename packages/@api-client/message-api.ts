import type {
  GetMessagesListParams,
  GetMessagesListResponse,
} from '@chat-types/api/message-api.types';
import { stringifyParams } from './utils';

export const getMessagesList = (
  params: GetMessagesListParams
): Promise<GetMessagesListResponse> => {
  const query = stringifyParams(params);

  return fetch(`/api/messages/list${query}`).then((res) => res.json());
};
