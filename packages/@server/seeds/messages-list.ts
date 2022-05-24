import faker from '@faker-js/faker';
import { chatsList } from '../seeds/chats-list';
import { usersList } from '../seeds/users-list';
import type { Message } from '@chat-types/resources/message.types';

export const messagesList: Message[] = [...new Array(100)].map(() => {
  const chat = chatsList[faker.datatype.number({ min: 0, max: 8 })];

  return {
    id: faker.datatype.uuid(),
    text: faker.lorem.sentence(),
    chatId: chat.id,
    userId: faker.datatype.boolean() ? chat.userId : usersList[0].id,
    createdAt: +faker.datatype.datetime(),
    updatedAt: +faker.datatype.datetime(),
  };
});
