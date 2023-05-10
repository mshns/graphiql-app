import { FC } from 'react';
import { uid } from 'uid';
import { IntrospectionField } from 'graphql';
import { Box } from '@mui/material';
import { DocumentTypeHeader, DocumentTypeRow } from 'entities';
import { sortAlphabetArray } from 'shared';

export const DocumentArgs: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  if (typeAsField?.args && typeAsField?.args.length) {
    return (
      <Box>
        <DocumentTypeHeader>Arguments</DocumentTypeHeader>
        {sortAlphabetArray(typeAsField?.args).map((arg) => (
          <DocumentTypeRow key={uid()} name={arg.name} type={arg.type} />
        ))}
      </Box>
    );
  }

  return null;
};
