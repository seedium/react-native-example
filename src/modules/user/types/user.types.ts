import type { ResourceId } from 'modules/core/types/resource.types';

export type User = {
  id: ResourceId;
  avatar: string;
  firstName: string;
  lastName: string;
};
