import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: import.meta.env.VITE_GRAPH_API,
  documents: ['src/**/*.graphql'],
  generates: {
    'src/shared/types/__generated__/schema.ts': { plugins: ['typescript'] },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.tsx',
        baseTypesPath: 'shared/types/__generated__/schema.ts',
        folder: '__generated__'
      },
      plugins: ['typescript-operations', 'typescript-react-apollo']
    }
  }
};

export default config;
