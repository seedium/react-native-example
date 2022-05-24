import type { ListResponse } from './base-api.types';
import type { MessageIncludedDisplayInfo } from '../resources/message.types';

export type GetMessagesListParams = {
  chatId: string;
};

export type GetMessagesListResponse = ListResponse<MessageIncludedDisplayInfo>;
