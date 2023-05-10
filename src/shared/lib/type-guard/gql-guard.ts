import { gql } from 'graphql-request';

export const isGqlValid = (query: string) => {
  try {
    gql`
      ${query}
    `;

    return true;
  } catch (error: unknown) {
    return error;

    return false;
  }
};
