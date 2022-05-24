import { QueryParams } from 'route-recognizer';
import { parse } from 'qs';

export const filterList = <T extends Record<string, unknown>>(
  list: T[],
  filter: Partial<T>
): T[] => {
  return list.filter((item) => {
    return !Object.keys(filter).some((key: keyof typeof filter) => {
      return filter[key] !== item[key];
    });
  });
};

const isParamsIncludesFilter = <T>(
  paramsParsed: unknown
): paramsParsed is {
  filter: Partial<T>;
} => {
  if (
    !!paramsParsed &&
    typeof paramsParsed === 'object' &&
    'filter' in paramsParsed
  ) {
    return true;
  }

  return false;
};

export const extractFilter = <T extends Record<string, unknown>>(
  queryParams: QueryParams
): Partial<T> | null => {
  const paramsParsed = parse(queryParams);

  if (isParamsIncludesFilter(paramsParsed)) {
    return paramsParsed.filter;
  }

  return null;
};
