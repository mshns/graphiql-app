import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import { DocumentTypeRow } from 'entities';
import { sortAlphabetArray } from 'shared';

export const DocumentArgs: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  if (!typeAsField?.args) {
    return null;
  }

  return (
    <section>
      <h4>Arguments</h4>
      {sortAlphabetArray(typeAsField?.args).map((arg, i) => (
        <DocumentTypeRow key={i + Date.now()} name={arg.name} type={arg.type} />
      ))}
    </section>
  );
};
