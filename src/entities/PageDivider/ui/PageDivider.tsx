import { Divider, Typography } from '@mui/material';

export const PageDivider = ({ title }: { title: string }) => {
  return (
    <Divider textAlign="center" sx={{ m: 5 }}>
      <Typography variant="h5" color="secondary.main" component="h4">
        {title}
      </Typography>
    </Divider>
  );
};
