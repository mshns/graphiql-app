import { FC } from 'react';
import { uid } from 'uid';
import { IntrospectionField } from 'graphql';
import { DocumentTypeRow } from 'entities';
import { sortAlphabetArray } from 'shared';

export const DocumentArgs: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  if (typeAsField?.args && typeAsField?.args.length) {
    return (
      <section>
        <h4>Arguments</h4>
        {sortAlphabetArray(typeAsField?.args).map((arg) => (
          <DocumentTypeRow key={uid()} name={arg.name} type={arg.type} />
        ))}
      </section>
    );
  }

  return null;
};
