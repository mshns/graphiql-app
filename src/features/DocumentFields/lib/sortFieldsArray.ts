import { IntrospectionField } from 'graphql';

export const sortFieldsArray = (array: readonly IntrospectionField[]) =>
  array.slice(0).sort((a, b) => a.name.localeCompare(b.name));
