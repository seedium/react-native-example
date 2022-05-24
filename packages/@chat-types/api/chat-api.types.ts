import type { ChatIncludedDisplayInfo } from '../resources/chat.types';
import type { ListResponse } from './base-api.types';

export type GetChatsListParams = {};

export type GetChatsListResponse = ListResponse<ChatIncludedDisplayInfo>;
