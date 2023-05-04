import { FC } from 'react';
import { IntrospectionField } from 'graphql';

import { sortArgsArray } from '../lib/sortArgsArray';
import { DocumentTypeRow } from 'entities';

export const DocumentArgs: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  if (!typeAsField?.args) {
    return null;
  }

  return (
    <section>
      {sortArgsArray(typeAsField?.args).map((arg, i) => (
        <DocumentTypeRow key={i} name={arg.name} type={arg.type} />
      ))}
    </section>
  );
};
