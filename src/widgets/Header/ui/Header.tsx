import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { SvgIcon, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';

import { LogoGraphQL } from 'shared';
import { HeaderButtonList, HeaderScroll } from 'entities';

import { LogoLink } from './styled/LogoLink.styled';

export const Header: FC = () => {
  const { t } = useTranslation(['layout']);

  return (
    <HeaderScroll>
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <LogoLink href="/" underline="none">
            <SvgIcon sx={{ width: 36, height: 36 }}>
              <LogoGraphQL />
            </SvgIcon>
            {t('GraphiQL')}
          </LogoLink>
          <HeaderButtonList />
        </Toolbar>
      </AppBar>
    </HeaderScroll>
  );
};
