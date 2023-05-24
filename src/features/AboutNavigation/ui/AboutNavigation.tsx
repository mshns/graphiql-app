import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector, ButtonStyled, ROUTE } from 'shared';

export const AboutNavigation = () => {
  const { t } = useTranslation(['layout']);
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);

  if (isLoggedIn) {
    return (
      <ButtonStyled onClick={() => navigate(ROUTE.Playground)} variant="contained" sx={{ width: 234, m: 1 }}>
        {t('Editor')}
      </ButtonStyled>
    );
  }

  return (
    <>
      <ButtonStyled onClick={() => navigate(ROUTE.Login)} variant="contained" sx={{ width: 234, m: 1 }}>
        {t('Sign In')}
      </ButtonStyled>
      <ButtonStyled onClick={() => navigate(ROUTE.SignUp)} variant="contained" sx={{ width: 234, m: 1 }}>
        {t('Sign Up')}
      </ButtonStyled>
    </>
  );
};
