import { FC } from 'react';
import { IntrospectionQuery } from 'graphql';
import { DocumentTypeRow } from 'entities';

export const DocumentRoot: FC<{ introspection?: IntrospectionQuery }> = ({ introspection }) => {
  return (
    <section>
      <h3>Root Types</h3>
      <div>
        <DocumentTypeRow name={'query'} type={introspection?.__schema.queryType.name} />
        <DocumentTypeRow name={'mutation'} type={introspection?.__schema.mutationType?.name} />
        <DocumentTypeRow name={'subscription'} type={introspection?.__schema.subscriptionType?.name} />
      </div>
    </section>
  );
};
