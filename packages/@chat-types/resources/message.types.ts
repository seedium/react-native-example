export type Message = {
  id: string;
  text: string;
  chatId: string;
  userId: string;
  createdAt: number;
  updatedAt: number;
};

export type MessageIncludedDisplayInfo = Message & {
  isMy: boolean;
};
