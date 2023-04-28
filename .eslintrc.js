module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'comma-dangle': ['error', 'only-multiline'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-reqiures': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'warn'
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react']
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        'prettier/prettier': [2, { parser: 'graphql' }],
        '@graphql-eslint/avoid-duplicate-fields': 'error',
        '@graphql-eslint/executable-definitions': 'error',
        '@graphql-eslint/fields-on-correct-type': 'error',
        '@graphql-eslint/fragments-on-composite-type': 'error',
        '@graphql-eslint/known-argument-names': 'error',
        '@graphql-eslint/known-directives': 'error',
        '@graphql-eslint/known-type-names': 'error',
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/no-deprecated': 'warn',
        '@graphql-eslint/no-unused-variables': 'warn',
        '@graphql-eslint/provided-required-arguments': 'error',
        '@graphql-eslint/scalar-leafs': 'error',
        '@graphql-eslint/unique-argument-names': 'error',
        '@graphql-eslint/unique-input-field-names': 'error',
        '@graphql-eslint/unique-variable-names': 'error',
        '@graphql-eslint/value-literals-of-correct-type': 'error',
        '@graphql-eslint/variables-are-input-types': 'error',
        '@graphql-eslint/variables-in-allowed-position': 'error',
        '@graphql-eslint/match-document-filename': [
          'error',
          {
            fileExtension: '.graphql',
            query: 'PascalCase',
            mutation: 'PascalCase',
            subscription: 'PascalCase',
            fragment: { style: 'PascalCase', suffix: '.fragment' }
          }
        ]
      }
    }
  ]
};
