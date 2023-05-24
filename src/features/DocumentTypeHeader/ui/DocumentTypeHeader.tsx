import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentTypeHeader: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.documentReducer);

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <>
        <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center', userSelect: 'none' }}>
          <Button sx={{ minWidth: 'auto' }}>
            <ArrowBackIcon
              onClick={stepBackHandler}
              sx={{ cursor: 'pointer', fontSize: '1.2rem', color: 'text.secondary' }}
            />
          </Button>

          <Box sx={{ display: 'flex', gap: '0.5em', my: 1 }}>
            {typeAsField?.name ? <Typography>{typeAsField?.name} :</Typography> : null}
            <Typography>{currentTypeName}</Typography>
          </Box>
        </Box>

        <Divider variant="middle" sx={{ marginTop: 1 }} />
      </>
    );
  }

  return null;
};
