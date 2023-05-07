import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { SpeedDialAction, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { theme } from 'shared';
import { FooterWrapper } from './FooterWrapper.styled';
import { FooterItem } from './FooterItem.styled';
import { AuthorListLogo } from './AuthorListLogo.styled';
import { SvgIconLogo } from './SvgIconLogo.styled';

import { ReactComponent as LogoRSS } from '../assets/rs_school_js.svg';
import { ReactComponent as LogoGraphQL } from '../assets/graph_ql.svg';
import { AUTHORLIST } from 'widgets/Footer/constants';

export const Footer: FC = () => {
  return (
    <FooterWrapper theme={theme}>
      <FooterItem theme={theme}>
        <AuthorListLogo
          ariaLabel="application authors"
          icon={
            <SvgIconLogo theme={theme} width={'48px'}>
              <GitHubIcon />
            </SvgIconLogo>
          }
        >
          {AUTHORLIST.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
          ))}
        </AuthorListLogo>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main' }}>
          Created by Power Rangers
        </Typography>
      </FooterItem>

      <FooterItem theme={theme}>
        <Link to="https://graphql.org/">
          <SvgIconLogo theme={theme} width={'48px'}>
            <LogoGraphQL />
          </SvgIconLogo>
        </Link>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main' }}>
          GraphiQL © 2023
        </Typography>
      </FooterItem>

      <FooterItem theme={theme}>
        <Link to="https://rs.school/react/">
          <SvgIconLogo viewBox="0 0 242 90" theme={theme} width={'92px'}>
            <LogoRSS />
          </SvgIconLogo>
        </Link>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main', mt: 0.5 }}>
          The Rolling Scopes School
        </Typography>
      </FooterItem>
    </FooterWrapper>
  );
};
