import { FC } from 'react';
import { Divider, SvgIcon, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

type Props = {
  title: string;
  icon: JSX.Element;
};

export const PageDivider: FC<Props> = ({ title, icon }) => {
  const theme = useTheme();
  const isLessSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Divider textAlign="center" sx={{ m: isLessSm ? 2 : 5 }}>
      <Tooltip title={title}>
        <SvgIcon sx={{ color: 'divider', width: isLessSm ? 40 : 60, height: isLessSm ? 40 : 60 }}>{icon}</SvgIcon>
      </Tooltip>
      <Typography
        variant="h5"
        component="h4"
        sx={{ color: 'secondary.main', letterSpacing: 4, display: { sm: 'block', xs: 'none' } }}
      >
        {title}
      </Typography>
    </Divider>
  );
};
