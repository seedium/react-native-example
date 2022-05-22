import faker from '@faker-js/faker';

import type { User } from '@packages/chat-types/resources/user.types';
import { USER_PINNED } from '@packages/chat-types/resources/user.types';

export const usersList: User[] = [...new Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  avatar: faker.datatype.boolean() ? faker.image.avatar() : undefined,
  firstName: faker.name.firstName('female'),
  lastName: faker.name.lastName('female'),
  pinned: faker.datatype.boolean() ? USER_PINNED.PINNED : USER_PINNED.NONE,
}));
