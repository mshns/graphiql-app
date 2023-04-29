/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  client: {
    service: {
      name: 'client',
      localSchemaFile: path.resolve(__dirname, './schema.graphql')
    },
    tagName: 'omitGqlTagsTheyAreUnderGraphqlCodeGeneratorControl'
  }
};
