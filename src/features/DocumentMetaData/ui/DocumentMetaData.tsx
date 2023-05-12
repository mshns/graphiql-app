import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { Box, Typography } from '@mui/material';
import { DocumentTypeHeader } from 'entities';

export const DocumentMetaData: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  if (currentType && currentType.description) {
    return (
      <Box sx={{ my: 2 }}>
        <DocumentTypeHeader> Metadata for {currentType.name} type </DocumentTypeHeader>
        <Typography variant="body2">{currentType.description}</Typography>
      </Box>
    );
  }

  return null;
};
