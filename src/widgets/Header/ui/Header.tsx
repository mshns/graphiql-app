import { type FC } from 'react';

import { Button, ButtonGroup, SvgIcon, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';

import AppBar from '@mui/material/AppBar';
import SettingsIcon from '@mui/icons-material/Settings';
import { LogoGraphQL } from 'shared';
import { LogoLink } from './LogoLink.styled';

export const Header: FC = () => {
  const { i18n, t } = useTranslation(['layout']);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <LogoLink href="/" component="button" underline="none">
          <SvgIcon sx={{ width: 36, height: 36 }}>
            <LogoGraphQL />
          </SvgIcon>
          {t('GraphiQL')}
        </LogoLink>

        <ButtonGroup size="small" color="secondary" aria-label="small button group">
          <Button variant="contained" sx={{ color: 'primary.contrastText' }} onClick={() => i18n.changeLanguage('en')}>
            {t('Sign In')}
          </Button>
          <Button variant="contained" sx={{ color: 'primary.contrastText' }} onClick={() => i18n.changeLanguage('ru')}>
            {t('Sign Up')}
          </Button>
          <Button>
            <SettingsIcon />
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
