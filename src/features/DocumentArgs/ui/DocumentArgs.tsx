import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import { DocumentTypeRow } from 'entities';
import { isIntrospectionNamedInput } from 'shared';

export const DocumentArgs: FC<{ fieldInfo?: IntrospectionField }> = ({ fieldInfo }) => {
  if (!fieldInfo?.args) {
    return null;
  }

  return (
    <section>
      {fieldInfo?.args.map((arg, i) => (
        <DocumentTypeRow key={i} name={arg.name} type={isIntrospectionNamedInput(arg.type) && arg.type.name} />
      ))}
    </section>
  );
};
