import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { TOAST_MESSAGES, TOAST_TYPES } from '../../constants';
import { useThrowToastify } from './useThrowToastify';

type GraphqlParseGuard = (
  query: string,
  action: ActionCreatorWithPayload<string, 'Editor/setQuery'>
) => Promise<boolean>;

export const useGraphqlParseGuard = () => {
  const { throwToastify } = useThrowToastify();

  const graphqlParseGuard = useCallback<GraphqlParseGuard>(
    async (query, action) => {
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
    },
    [throwToastify]
  );

  return { graphqlParseGuard };
};
