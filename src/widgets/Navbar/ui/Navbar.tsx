import { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

import BottomNavigation from '@mui/material/BottomNavigation';

import { useTranslation } from 'react-i18next';
import { NAVIGATION } from '../constants';
import { BottomNavigationItem } from './styled/BottomNavigationItem.styled';

export const Navbar: FC = () => {
  const { t } = useTranslation(['layout']);

  const navigate = useNavigate();

  const [value, setValue] = useState('About');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: 'background.paper', width: '80px' }}>
      <BottomNavigation
        showLabels
        sx={{ flexDirection: 'column', width: 80, height: 'auto', position: 'sticky', top: 60 }}
        value={value}
        onChange={handleChange}
      >
        {NAVIGATION.map((nav) => (
          <BottomNavigationItem
            key={nav.id}
            label={t(nav.name)}
            value={nav.name}
            icon={nav.icon}
            onClick={() => navigate(nav.route)}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
};
