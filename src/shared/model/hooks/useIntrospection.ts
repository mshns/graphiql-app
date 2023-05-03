import { useEffect, useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import { buildClientSchema, getIntrospectionQuery, GraphQLSchema, IntrospectionQuery } from 'graphql';

export const useIntrospection = () => {
  const { data: introspection, loading: isLoading } = useQuery<IntrospectionQuery>(
    gql`
      ${getIntrospectionQuery()}
    `
  );

  const schema = useRef<GraphQLSchema>();

  useEffect(() => {
    if (introspection) {
      schema.current = buildClientSchema(introspection);
    }
  }, [introspection]);

  return { introspection, isLoading, schema };
};
