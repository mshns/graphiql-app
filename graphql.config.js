module.exports = {
  projects: {
    app: {
      schema: ['schema.graphql'],
      documents: ['**/*.{graphql,js,ts,jsx,tsx}'],
      extensions: {
        endpoints: {
          default: {
            url: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
          }
        },
        languageService: {
          useSchemaFileDefinitions: true
        }
      }
    }
  }
};
