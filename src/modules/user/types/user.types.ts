import type { ResourceId } from 'modules/core/types/resource.types';

export type User = {
  id: ResourceId;
  firstName: string;
  lastName: string;
  avatar?: string;
};
