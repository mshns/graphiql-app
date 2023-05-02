import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { DocumentTypeRow } from 'entities';
import { isIntrospectionNamedOutput, isIntrospectionObjectType } from 'shared';

export const DocumentFields: FC<{ thisType?: IntrospectionType }> = ({ thisType }) => {
  if (!isIntrospectionObjectType(thisType)) {
    return null;
  } else {
    return (
      <section>
        {thisType.fields.map((field, i) => (
          <DocumentTypeRow key={i} name={field.name} type={isIntrospectionNamedOutput(field.type) && field.type.name} />
        ))}
      </section>
    );
  }
};
