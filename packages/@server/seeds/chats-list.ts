import faker from '@faker-js/faker';
import { usersList } from './users-list';
import type { Chat } from '@chat-types/resources/chat.types';

export const chatsList: Chat[] = [
  {
    id: faker.datatype.uuid(),
    userId: usersList[1].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[2].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[3].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[4].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[5].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[6].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[7].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[8].id,
  },
  {
    id: faker.datatype.uuid(),
    userId: usersList[9].id,
  },
];
