export enum USER_PINNED {
  PINNED = 'PINNED',
  NONE = 'NONE',
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  pinned: USER_PINNED;
};
