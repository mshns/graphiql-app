import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { TOAST_MESSAGES, TOAST_TYPES } from 'shared/constants';
import { throwToastify } from '.';

export const graphqlParseGuard = async (query: string, action: ActionCreatorWithPayload<string, 'Editor/setQuery'>) => {
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
    throwToastify(TOAST_MESSAGES.queryParse, TOAST_TYPES.error);

    return false;
  }
};
