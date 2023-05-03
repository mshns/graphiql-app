import { type FC } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const Header: FC = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'primary.dark' }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GraphiQL
          </Typography>
          <Stack spacing={1} direction="row">
            <Button variant="contained">Sign In</Button>
            <Button variant="contained">Sign Up</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
