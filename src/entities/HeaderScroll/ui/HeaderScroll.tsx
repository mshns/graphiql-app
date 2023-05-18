import { cloneElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export const HeaderScroll = ({ children, window }: Props) => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return cloneElement(children, {
    elevation: trigger ? 2 : 1,
    sx: {
      backgroundColor: trigger ? theme.palette.background.paper : theme.palette.background.default,
      transition: trigger ? '0.2s' : '0.3s'
    }
  });
};
