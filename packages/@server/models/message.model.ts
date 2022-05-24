import { Model } from 'miragejs';
import type { ModelDefinition } from 'miragejs/-types';
import type { Message } from '@chat-types/resources/message.types';

export const MessageModel: ModelDefinition<Message> = Model;
