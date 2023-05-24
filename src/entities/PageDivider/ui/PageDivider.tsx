import { FC } from 'react';
import { Divider, SvgIcon, Tooltip, Typography } from '@mui/material';

type Props = {
  title: string;
  icon: JSX.Element;
};

export const PageDivider: FC<Props> = ({ title, icon }) => {
  return (
    <Divider textAlign="center" sx={{ m: 5 }}>
      <Tooltip title={title}>
        <SvgIcon sx={{ color: 'divider', width: 60, height: 60 }}>{icon}</SvgIcon>
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
