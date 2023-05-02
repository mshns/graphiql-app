import { type FC } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

export const Footer: FC = () => {
  return (
    <Paper elevation={3}>
      <BottomNavigation showLabels>
        <BottomNavigationAction className="" label="Footer" />
      </BottomNavigation>
    </Paper>
  );
};
