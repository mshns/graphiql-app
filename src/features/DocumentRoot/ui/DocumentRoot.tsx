import { FC } from 'react';
import { IntrospectionQuery } from 'graphql';
import { useTranslation } from 'react-i18next';
import { Box, Divider } from '@mui/material';
import { DocumentTypeHeader, DocumentTypeRow } from 'entities';

export const DocumentRoot: FC<{ introspection?: IntrospectionQuery }> = ({ introspection }) => {
  const { t } = useTranslation(['playground']);

  return (
    <Box>
      <DocumentTypeHeader>{t('Root types')}</DocumentTypeHeader>

      <Divider variant="middle" />
      <Box p={1}>
        <DocumentTypeRow name={'query'} type={introspection?.__schema.queryType} />
        <DocumentTypeRow name={'mutation'} type={introspection?.__schema.mutationType} />
        <DocumentTypeRow name={'subscription'} type={introspection?.__schema.subscriptionType} />
      </Box>
    </Box>
  );
};
