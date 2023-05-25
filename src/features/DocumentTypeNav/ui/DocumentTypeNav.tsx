import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import { ButtonStyled, useAppActions, useAppSelector } from 'shared';

export const DocumentTypeNav: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.documentReducer);
  const theme = useTheme();

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <>
        <Box display="flex" alignItems="center" gap={theme.spacing(1)} sx={{ userSelect: 'none' }}>
          <ButtonStyled onClick={stepBackHandler} sx={{ minWidth: 'auto' }}>
            <ArrowBackIcon fontSize="small" />
          </ButtonStyled>

          <Box display="flex" gap={theme.spacing(1)} my={1}>
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
