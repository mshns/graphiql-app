import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAuth, signOut } from 'firebase/auth';
import { Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { ROUTE, useAppSelector, ButtonTitle, HeaderButton } from 'shared';

export const HeaderAuthButtons: FC = () => {
  const { t } = useTranslation(['layout']);
  const navigate = useNavigate();

  const { isLoggedIn } = useAppSelector((state) => state.userReducer);
  const auth = getAuth();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate(ROUTE.About);
  };

  if (isLoggedIn) {
    return (
      <HeaderButton onClick={handleSignOut}>
        <Tooltip title={t('Sign Out')}>
          <LogoutIcon fontSize="small" />
        </Tooltip>
        <ButtonTitle>{t('Sign Out')}</ButtonTitle>
      </HeaderButton>
    );
  }

  return (
    <>
      <HeaderButton
        onClick={() => {
          navigate(ROUTE.Login);
        }}
      >
        <Tooltip title={t('Sign In')}>
          <LoginIcon fontSize="small" />
        </Tooltip>
        <ButtonTitle>{t('Sign In')}</ButtonTitle>
      </HeaderButton>

      <HeaderButton
        onClick={() => {
          navigate(ROUTE.SignUp);
        }}
      >
        <Tooltip title={t('Sign Up')}>
          <PersonIcon fontSize="small" />
        </Tooltip>
        <ButtonTitle>{t('Sign Up')}</ButtonTitle>
      </HeaderButton>
    </>
  );
};
