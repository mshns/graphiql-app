import { FC } from 'react';
import { uid } from 'uid';
import { useTranslation } from 'react-i18next';
import { IntrospectionType } from 'graphql';
import { Box, Divider } from '@mui/material';
import { DocumentTypeHeader, DocumentTypeRow } from 'entities';
import { isIntrospectionInterfaceType, isIntrospectionObjectType, sortAlphabetArray } from 'shared';

export const DocumentFields: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  const { t } = useTranslation(['playground']);

  if (isIntrospectionObjectType(currentType) || isIntrospectionInterfaceType(currentType)) {
    return (
      <Box>
        <DocumentTypeHeader>{t('Fields')}</DocumentTypeHeader>

        {sortAlphabetArray(currentType.fields).map((field) => (
          <DocumentTypeRow key={uid()} name={field.name} type={field.type} />
        ))}

        <Divider variant="middle" sx={{ marginTop: 1 }} />
      </Box>
    );
  }

  return null;
};
