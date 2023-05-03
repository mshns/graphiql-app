import { IntrospectionInputValue } from 'graphql';

export const sortArgsArray = (array: readonly IntrospectionInputValue[]) =>
  array.slice(0).sort((a, b) => a.name.localeCompare(b.name));
