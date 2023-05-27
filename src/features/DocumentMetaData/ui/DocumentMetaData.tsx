import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { IntrospectionType } from 'graphql';
import { Box, Divider, Typography } from '@mui/material';
import { DocumentTypeHeader } from 'entities';

export const DocumentMetaData: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  const { t } = useTranslation(['playground']);

  if (currentType && currentType.description) {
    return (
      <Box>
        <DocumentTypeHeader>{`${t('Metadata')} ${currentType.name} ${t('Type')}`} </DocumentTypeHeader>

        <Typography pl={1} variant="body1">
          {currentType.description}
        </Typography>

        <Divider variant="middle" sx={{ marginTop: 1 }} />
      </Box>
    );
  }

  return null;
};
