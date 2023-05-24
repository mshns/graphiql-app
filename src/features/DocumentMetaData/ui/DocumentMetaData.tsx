import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { Box, Divider, Typography } from '@mui/material';
import { DocumentTypeHeader } from 'entities';

export const DocumentMetaData: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  if (currentType && currentType.description) {
    return (
      <Box>
        <DocumentTypeHeader> Metadata for {currentType.name} type </DocumentTypeHeader>

        <Typography pl={1} variant="body1">
          {currentType.description}
        </Typography>

        <Divider variant="middle" sx={{ marginTop: 1 }} />
      </Box>
    );
  }

  return null;
};
