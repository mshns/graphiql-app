import { IntrospectionField, IntrospectionInputValue } from 'graphql';

export const sortAlphabetArray = <T extends IntrospectionInputValue | IntrospectionField>(array: readonly T[]) => {
  return array.slice(0).sort((a, b) => a.name.localeCompare(b.name));
};
