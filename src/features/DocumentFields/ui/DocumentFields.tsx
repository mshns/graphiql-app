import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { sortFieldsArray } from '../lib/sortFieldsArray';
import { DocumentTypeRow } from 'entities';
import { isIntrospectionNamedOutput, isIntrospectionObjectType } from 'shared';

export const DocumentFields: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  if (!isIntrospectionObjectType(currentType)) {
    return null;
  } else {
    return (
      <section>
        {sortFieldsArray(currentType.fields).map((field, i) => (
          <DocumentTypeRow key={i} name={field.name} type={isIntrospectionNamedOutput(field.type) && field.type.name} />
        ))}
      </section>
    );
  }
};
