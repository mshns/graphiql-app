import { useState, type FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getAuth, signOut } from 'firebase/auth';
import { ButtonGroup, Drawer, Tooltip } from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

import { ROUTE, useAppSelector } from 'shared';
import { HeaderSettings } from 'features';

import { ButtonTitle, HeaderButton } from './styled';

export const HeaderButtonList: FC = () => {
  const { t } = useTranslation(['layout']);
  const navigate = useNavigate();
  const auth = getAuth();
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);

  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const toggleSettings = (open: boolean) => {
    setSettingsOpen(open);
  };

  const handleSignOut = async () => {
    await signOut(auth);
    navigate(ROUTE.About);
  };

  return (
    <>
      <ButtonGroup variant="contained" size="small" aria-label="header button group">
        {isLoggedIn ? (
          <HeaderButton onClick={handleSignOut}>
            <Tooltip title={t('Sign Out')}>
              <LogoutIcon fontSize="small" />
            </Tooltip>
            <ButtonTitle>{t('Sign Out')}</ButtonTitle>
          </HeaderButton>
        ) : (
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
        )}
        <HeaderButton onClick={() => toggleSettings(true)}>
          <Tooltip title={t('Settings')}>
            <SettingsIcon fontSize="small" />
          </Tooltip>
          <ButtonTitle>{t('Settings')}</ButtonTitle>
        </HeaderButton>
      </ButtonGroup>

      <Drawer anchor="right" open={isSettingsOpen} onClose={() => toggleSettings(false)}>
        <HeaderSettings />
      </Drawer>
    </>
  );
};
