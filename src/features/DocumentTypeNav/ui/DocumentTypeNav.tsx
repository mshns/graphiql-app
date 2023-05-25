import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Divider, Typography } from '@mui/material';
import { ButtonStyled, useAppActions, useAppSelector } from 'shared';

export const DocumentTypeNav: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.documentReducer);

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <>
        <Box sx={{ display: 'flex', gap: '0.5em', alignItems: 'center', userSelect: 'none' }}>
          <ButtonStyled onClick={stepBackHandler} sx={{ minWidth: 'auto' }}>
            <ArrowBackIcon sx={{ cursor: 'pointer', fontSize: '1.2rem' }} />
          </ButtonStyled>

          <Box sx={{ display: 'flex', gap: '0.5em', my: 1 }}>
            {typeAsField?.name ? <Typography color="secondary.main">{typeAsField?.name}:</Typography> : null}
            <Typography color="text.secondary">{currentTypeName}</Typography>
          </Box>
        </Box>

        <Divider variant="middle" sx={{ marginTop: 1 }} />
      </>
    );
  }

  return null;
};
