import type { User } from '../resources/user.types';
import type { Message } from '../resources/message.types';

export type Chat = {
  id: string;
  userId: string;
};

export type ChatIncludedDisplayInfo = Chat & {
  user: User;
  lastMessage?: Message;
};
