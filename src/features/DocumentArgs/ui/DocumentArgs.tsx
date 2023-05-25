import { FC } from 'react';
import { uid } from 'uid';
import { useTranslation } from 'react-i18next';
import { IntrospectionField } from 'graphql';
import { Box, Divider } from '@mui/material';
import { DocumentTypeHeader, DocumentTypeRow } from 'entities';
import { sortAlphabetArray } from 'shared';

export const DocumentArgs: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  const { t } = useTranslation(['playground']);

  if (typeAsField?.args && typeAsField?.args.length) {
    return (
      <Box>
        <DocumentTypeHeader>{t('Arguments')}</DocumentTypeHeader>

        {sortAlphabetArray(typeAsField?.args).map((arg) => (
          <DocumentTypeRow key={uid()} name={arg.name} type={arg.type} />
        ))}

        <Divider variant="middle" sx={{ marginTop: 1 }} />
      </Box>
    );
  }

  return null;
};
