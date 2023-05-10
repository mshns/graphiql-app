import { FC } from 'react';
import { IntrospectionQuery } from 'graphql';
import { DocumentTypeHeader, DocumentTypeRow } from 'entities';

export const DocumentRoot: FC<{ introspection?: IntrospectionQuery }> = ({ introspection }) => {
  return (
    <section>
      <DocumentTypeHeader>Root Types</DocumentTypeHeader>
      <div>
        <DocumentTypeRow name={'query'} type={introspection?.__schema.queryType} />
        <DocumentTypeRow name={'mutation'} type={introspection?.__schema.mutationType} />
        <DocumentTypeRow name={'subscription'} type={introspection?.__schema.subscriptionType} />
      </div>
    </section>
  );
};
