import { Divider, Typography } from '@mui/material';

export const PageDivider = ({ title }: { title: string }) => {
  return (
    <Divider textAlign="center" sx={{ m: 5 }}>
      <Typography variant="h4" component="h4" sx={{ color: 'secondary.main' }}>
        {title}
      </Typography>
    </Divider>
  );
};
