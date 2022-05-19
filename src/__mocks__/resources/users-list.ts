import faker from '@faker-js/faker';

import type { User } from 'modules/user/types/user.types';

export const usersList: User[] = [
  {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName('female'),
    lastName: faker.name.lastName('female'),
  },
  {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName('male'),
    lastName: faker.name.lastName('male'),
  },
  {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName('female'),
    lastName: faker.name.lastName('female'),
  },
  {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName('female'),
    lastName: faker.name.lastName('female'),
  },
  {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName('female'),
    lastName: faker.name.lastName('female'),
  },
  {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName('female'),
    lastName: faker.name.lastName('female'),
  },
];
