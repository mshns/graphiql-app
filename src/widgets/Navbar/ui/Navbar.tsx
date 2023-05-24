import { type FC } from 'react';
import { uid } from 'uid';
import { Box } from '@mui/material';
import { NavigationBarLink } from 'entities';
import { NAVIGATION } from '../constants';
import { NavigationList } from './NavigationList.styled';

export const Navbar: FC = () => {
  return (
    <Box sx={{ backgroundColor: 'barsColor.light' }}>
      <NavigationList>
        {NAVIGATION.map((nav) => (
          <NavigationBarLink key={uid()} {...{ nav }} />
        ))}
      </NavigationList>
    </Box>
  );
};
