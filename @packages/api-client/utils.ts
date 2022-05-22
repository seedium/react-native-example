import { stringify } from 'qs';

export const stringifyParams = <T extends object>(params?: T) => {
  if (
    !!params &&
    typeof params === 'object' &&
    Object.keys(params).length > 0
  ) {
    return stringify(params);
  }

  return '';
};
