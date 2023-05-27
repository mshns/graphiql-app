import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { TOAST_MESSAGES, TOAST_TYPES } from 'shared/constants';
import { throwToastify } from '.';

type GraphqlParseGuard = (
  query: string,
  action: ActionCreatorWithPayload<string, 'Editor/setQuery'>,
  theme: 'light' | 'dark'
) => Promise<boolean>;

export const graphqlParseGuard: GraphqlParseGuard = async (query, action, theme) => {
  const prettier = await import('https://unpkg.com/prettier@2.8.8/esm/standalone.mjs'!);
  const parserGraphql = await import(`https://unpkg.com/prettier@2.8.8/esm/parser-graphql.mjs`!);

  if (!query) {
    return true;
  }

  try {
    const result = prettier.default.format(query, {
      parser: 'graphql',
      plugins: [parserGraphql.default]
    });

    action(result);

    return true;
  } catch (error) {
    throwToastify(TOAST_MESSAGES.queryParse, TOAST_TYPES.error, theme);

    return false;
  }
};
