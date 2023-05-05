import { FC } from 'react';
import { uid } from 'uid';
import { IntrospectionType } from 'graphql';
import { DocumentTypeRow } from 'entities';
import { isIntrospectionInterfaceType, isIntrospectionObjectType, sortAlphabetArray } from 'shared';

export const DocumentFields: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  if (isIntrospectionObjectType(currentType) || isIntrospectionInterfaceType(currentType)) {
    return (
      <section>
        <h4>Fields</h4>
        {sortAlphabetArray(currentType.fields).map((field) => (
          <DocumentTypeRow key={uid()} name={field.name} type={field.type} />
        ))}
      </section>
    );
  }

  return null;
};
