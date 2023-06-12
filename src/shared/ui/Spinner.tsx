import { Box, CircularProgress } from '@mui/material';

export const Spinner = () => (
  <Box sx={{ display: 'flex', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
    <CircularProgress color="secondary" />
  </Box>
);
