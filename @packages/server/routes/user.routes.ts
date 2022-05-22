import faker from '@faker-js/faker';
import { AnyFactories, Registry } from 'miragejs/-types';
import { Server } from 'miragejs/server';
import { pipe } from 'fp-ts/function';
// models
import { models } from '../models/models';
import { extractFilter, filterList } from '../utils/filter.utils';
import { GetUsersListResponse } from '@packages/chat-types/api/user-api.types';
import { User } from '@packages/chat-types/resources/user.types';

export const userRoutes = (
  server: Server<Registry<typeof models, AnyFactories>>
): void => {
  server.get<GetUsersListResponse>('/users/list', (schema, request) => {
    return pipe(
      schema.all('user').models,
      (users) => {
        if (request.queryParams) {
          const filter = extractFilter(request.queryParams);

          if (filter) {
            return filterList(users, filter);
          }
        }

        return users;
      },
      (users) => {
        return {
          list: users as User[],
          length: users.length,
        };
      }
    );
  });

  server.get('/users/:id/online', () => {
    return {
      isOnline: faker.datatype.boolean(),
    };
  });
};
