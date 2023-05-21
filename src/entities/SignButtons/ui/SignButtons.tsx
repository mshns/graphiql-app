import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from 'features';
import { ROUTE } from 'shared';

export const SignButtons = () => {
  const { t } = useTranslation(['layout']);
  const navigate = useNavigate();

  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <ButtonStyled onClick={() => navigate(ROUTE.Login)} variant="contained" sx={{ width: 200, m: 1 }}>
        {t('Sign In')}
      </ButtonStyled>
      <ButtonStyled onClick={() => navigate(ROUTE.SignUp)} variant="contained" sx={{ width: 200, m: 1 }}>
        {t('Sign Up')}
      </ButtonStyled>
    </Box>
  );
};
