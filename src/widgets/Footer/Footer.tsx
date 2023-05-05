import { type FC } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Box, SpeedDial, SpeedDialAction, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer: FC = () => {
  const withLink = (to: string, children: JSX.Element) => <Link to={to}>{children}</Link>;

  const actions = [
    {
      icon: withLink(
        'https://github.com/mshns',
        <Avatar alt="Mikhail Nosikov" src="https://avatars.githubusercontent.com/u/106452809?v=4" />
      ),
      name: 'Mikhail Nosikov'
    },
    {
      icon: withLink(
        'https://github.com/potatosim',
        <Avatar alt="Hanna Yemelyanava" src="https://avatars.githubusercontent.com/u/107081776?v=4" />
      ),
      name: 'Hanna Yemelyanava'
    },
    {
      icon: withLink(
        'https://github.com/pa4ka1992',
        <Avatar alt="Nikita Kisly" src="https://avatars.githubusercontent.com/u/83978362?v=4" />
      ),
      name: 'Nikita Kisly'
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        padding: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        bgcolor: 'primary.main'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          minWidth: 300,
          height: 90,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end'
        }}
      >
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main' }}>
          Created by Power Rangers
        </Typography>
        <SpeedDial
          ariaLabel="application authors"
          sx={{ position: 'absolute', bottom: 32, left: 'calc(50% - 28px)' }}
          icon={<GitHubIcon fontSize="large" sx={{ color: 'secondary.main' }} />}
        >
          {actions.map((action) => (
            <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
          ))}
        </SpeedDial>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main', textAlign: 'center' }}>
          GraphiQL
        </Typography>
        <CopyrightIcon sx={{ color: 'primary.contrastText', m: 0.5 }} />
        <Typography variant="h6" component="div" sx={{ color: 'secondary.main', textAlign: 'center' }}>
          2023
        </Typography>
      </Box>

      <Box
        component={Link}
        target="_blank"
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
    </Box>
  );
};
