import { useEffect, useState } from 'react';
import { buildClientSchema, getIntrospectionQuery, GraphQLSchema, IntrospectionQuery } from 'graphql';
import { request, gql } from 'graphql-request';

export const useIntrospection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [introspection, setIntrospection] = useState<IntrospectionQuery>();
  const [schema, setSchema] = useState<GraphQLSchema>();

  useEffect(() => {
    (async () => {
      try {
        const introspectionResponse = await request<IntrospectionQuery>(
          import.meta.env.VITE_GRAPH_API,
          gql`
            ${getIntrospectionQuery()}
          `
        );
        setIntrospection(introspectionResponse);
        setIsLoading(false);

        setSchema(buildClientSchema(introspectionResponse));
      } catch (error) {
        // if (error instanceof Error) {
        //   console.log(error.message);
        // }
      }
    })();
  }, []);

  return { introspection, isLoading, schema };
};
