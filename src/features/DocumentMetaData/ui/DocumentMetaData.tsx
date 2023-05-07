import { FC } from 'react';
import { IntrospectionType } from 'graphql';
import { Typography } from '@mui/material';

export const DocumentMetaData: FC<{ currentType?: IntrospectionType }> = ({ currentType }) => {
  if (currentType && currentType.description) {
    return (
      <>
        <h4>Metadata for {currentType.name} type</h4>
        <Typography>{currentType.description}</Typography>
      </>
    );
  }

  return null;
};
