import { useState, type FC } from 'react';

import { ButtonGroup, Drawer, SvgIcon, Toolbar, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from 'react-i18next';

import { LogoGraphQL } from 'shared';
import { HeaderSettings } from 'features';
import { LogoLink, HeaderButton } from './styled';

export const Header: FC = () => {
  const { t } = useTranslation(['layout']);

  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = (open: boolean) => {
    setSettingsOpen(open);
  };

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <LogoLink href="/" underline="none">
          <SvgIcon sx={{ width: 36, height: 36 }}>
            <LogoGraphQL />
          </SvgIcon>
          {t('GraphiQL')}
        </LogoLink>

        <ButtonGroup variant="contained" size="small" aria-label="header button group">
          <HeaderButton>{t('Sign In')}</HeaderButton>
          <HeaderButton>{t('Sign Up')}</HeaderButton>
          <HeaderButton>
            <Tooltip title={t('Settings')}>
              <SettingsIcon fontSize="small" onClick={() => toggleSettings(true)} />
            </Tooltip>
          </HeaderButton>
        </ButtonGroup>
      </Toolbar>
      <Drawer anchor="right" open={isSettingsOpen} onClose={() => toggleSettings(false)}>
        <HeaderSettings />
      </Drawer>
    </AppBar>
  );
};
