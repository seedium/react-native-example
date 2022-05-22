import { ChatIncludedDisplayInfo } from '@packages/chat-types/resources/chat.types';
import { ListResponse } from './base-api.types';

export type GetChatsListParams = {};

export type GetChatsListResponse = ListResponse<ChatIncludedDisplayInfo>;
