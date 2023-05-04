import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { sortFieldsArray } from '../lib/sortFieldsArray';
import { DocumentTypeRow } from 'entities';
import { isIntrospectionInterfaceType, isIntrospectionObjectType } from 'shared';

export const DocumentFields: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  if (isIntrospectionObjectType(currentType) || isIntrospectionInterfaceType(currentType)) {
    return (
      <section>
        {sortFieldsArray(currentType.fields).map((field, i) => (
          <DocumentTypeRow key={i} name={field.name} type={field.type} />
        ))}
      </section>
    );
  }

  return null;
};
