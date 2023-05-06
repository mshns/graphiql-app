import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { Box, SpeedDial, SpeedDialAction, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { FooterWrapper } from './FooterWrapper.styled';
import { FooterItem } from './FooterItem.styled';

import { theme } from 'shared';

import { AUTHORLIST } from 'widgets/Footer/constants';

export const Footer: FC = () => {
  return (
    <FooterWrapper theme={theme}>
      <FooterItem theme={theme}>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main' }}>
          Created by Power Rangers
        </Typography>
        <SpeedDial
          ariaLabel="application authors"
          sx={{ position: 'absolute', bottom: 32, left: 'calc(50% - 28px)' }}
          icon={<GitHubIcon fontSize="large" sx={{ color: 'secondary.main' }} />}
        >
          {AUTHORLIST.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
          ))}
        </SpeedDial>
      </FooterItem>

      <FooterItem theme={theme}>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main', textAlign: 'center' }}>
          GraphiQL © 2023
        </Typography>
      </FooterItem>

      <FooterItem theme={theme}>
        <Box
          component={Link}
          to="https://rs.school/react/"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 90,
            textDecoration: 'none'
          }}
        >
          <Box
            component="img"
            sx={{ width: 100, mt: 2 }}
            alt="The Rolling Scopes School"
            src="https://rs.school/images/rs_school_js.svg"
          />
          <Typography variant="h6" component="div" sx={{ color: 'secondary.main' }}>
            The Rolling Scopes School
          </Typography>
        </Box>
      </FooterItem>
    </FooterWrapper>
  );
};
