import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button } from '@mui/material';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentTypeHeader: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.documentReducer);

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button sx={{ minWidth: 'auto' }}>
          <ArrowBackIcon onClick={stepBackHandler} sx={{ cursor: 'pointer', fontSize: '1.2rem' }} />
        </Button>

        <div>
          {typeAsField?.name ? <span>{typeAsField?.name} :</span> : null}
          <span>{currentTypeName}</span>
        </div>
      </Box>
    );
  }

  return null;
};
