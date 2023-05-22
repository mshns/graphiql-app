import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import { SpeedDialAction, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { LogoGraphQL } from 'shared';
import { AUTHORLIST } from 'widgets/Footer/constants';
import { LogoRSS } from './assets';

import { FooterWrapper, FooterItem, AuthorListLogo, SvgIconLogo } from './styled';

export const Footer: FC = () => {
  const { t } = useTranslation(['layout']);

  return (
    <FooterWrapper elevation={4}>
      <FooterItem>
        <AuthorListLogo
          ariaLabel="application authors"
          icon={
            <SvgIconLogo width={'48px'}>
              <GitHubIcon />
            </SvgIconLogo>
          }
        >
          {AUTHORLIST.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
          ))}
        </AuthorListLogo>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main' }}>
          {t('Created by Power Rangers')}
        </Typography>
      </FooterItem>

      <FooterItem>
        <Link to="https://graphql.org/">
          <SvgIconLogo width={'46px'}>
            <LogoGraphQL />
          </SvgIconLogo>
        </Link>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main' }}>
          {t('GraphiQL © 2023')}
        </Typography>
      </FooterItem>

      <FooterItem>
        <Link to="https://rs.school/react/">
          <SvgIconLogo viewBox="0 0 242 90" width={'92px'}>
            <LogoRSS />
          </SvgIconLogo>
        </Link>
        <Typography variant="h6" component="div" sx={{ mt: 0.7, color: 'secondary.main' }}>
          {t('The Rolling Scopes School')}
        </Typography>
      </FooterItem>
    </FooterWrapper>
  );
};
