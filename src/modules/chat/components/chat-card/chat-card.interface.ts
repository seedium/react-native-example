import type { User } from '@chat-types/resources/user.types';
import type { Message } from '@chat-types/resources/message.types';

export type ChatCardProps = {
  chatId: string;
  user: User;
  message?: Message;
};
