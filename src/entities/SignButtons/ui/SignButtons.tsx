import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, ROUTE } from 'shared';
import { ButtonStyled } from 'features';

export const SignButtons = () => {
  const { t } = useTranslation(['layout']);
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);

  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {isLoggedIn ? (
        <ButtonStyled onClick={() => navigate(ROUTE.Playground)} variant="contained" sx={{ width: 234, m: 1 }}>
          {t('Editor')}
        </ButtonStyled>
      ) : (
        <>
          <ButtonStyled onClick={() => navigate(ROUTE.Login)} variant="contained" sx={{ width: 234, m: 1 }}>
            {t('Sign In')}
          </ButtonStyled>
          <ButtonStyled onClick={() => navigate(ROUTE.SignUp)} variant="contained" sx={{ width: 234, m: 1 }}>
            {t('Sign Up')}
          </ButtonStyled>
        </>
      )}
    </Box>
  );
};
