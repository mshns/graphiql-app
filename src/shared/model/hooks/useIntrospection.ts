import { useEffect, useState } from 'react';
import { buildClientSchema, getIntrospectionQuery, GraphQLSchema, IntrospectionQuery } from 'graphql';
import { request, gql } from 'graphql-request';

export const useIntrospection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [introspection, setIntrospection] = useState<IntrospectionQuery>();
  const [schema, setSchema] = useState<GraphQLSchema>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const introspectionResponse = await request<IntrospectionQuery>(
          import.meta.env.VITE_GRAPH_API,
          gql`
            ${getIntrospectionQuery()}
          `
        );
        setIntrospection(introspectionResponse);

        setSchema(buildClientSchema(introspectionResponse));
      } catch (error) {
        // if (error instanceof Error) {
        //   console.log(error.message);
        // }
      }
      setIsLoading(false);
    })();
  }, []);

  return { introspection, isLoading, schema };
};
