import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ButtonStyled } from 'features';

export const SignButtons = () => {
  const { t } = useTranslation(['layout']);

  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <ButtonStyled variant="contained" sx={{ width: 200, m: 1 }}>
        {t('Sign In')}
      </ButtonStyled>
      <ButtonStyled variant="contained" sx={{ width: 200, m: 1 }}>
        {t('Sign Up')}
      </ButtonStyled>
    </Box>
  );
};
