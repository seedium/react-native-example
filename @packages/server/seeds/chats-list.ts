import { Chat } from '@packages/chat-types/resources/chat.types';
import faker from '@faker-js/faker';
import { usersList } from './users-list';

export const chatsList: Chat[] = [
  {
    id: faker.datatype.uuid(),
    userId: usersList[0].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[1].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[2].id,
  },
];
