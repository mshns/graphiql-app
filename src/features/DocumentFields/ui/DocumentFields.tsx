import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { isIntrospectionNamedOutput, isIntrospectionObjectType } from 'shared';

export const DocumentFields: FC<{ thisType?: IntrospectionType }> = ({ thisType }) => {
  if (!isIntrospectionObjectType(thisType)) {
    return null;
  } else {
    return (
      <section>
        {thisType.fields.map((field, i) => (
          <div key={i}>
            <span>{field.name}: </span>
            <span>{isIntrospectionNamedOutput(field.type) && field.type.name}</span>
          </div>
        ))}
      </section>
    );
  }
};
