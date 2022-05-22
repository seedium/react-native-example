import { User } from '@packages/chat-types/resources/user.types';

export type Chat = {
  id: string;
  userId: string;
};

export type ChatIncludedDisplayInfo = Chat & {
  user: User;
};
