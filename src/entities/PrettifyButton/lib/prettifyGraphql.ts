import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const prettifyGraphql = async (query: string, action: ActionCreatorWithPayload<string, 'Editor/setQuery'>) => {
  const prettier = await import('https://unpkg.com/prettier@2.8.8/esm/standalone.mjs'!);
  const parserGraphql = await import(`https://unpkg.com/prettier@2.8.8/esm/parser-graphql.mjs`!);

  const result = prettier.default.format(query, {
    parser: 'graphql',
    plugins: [parserGraphql.default]
  });

  action(result);
};
