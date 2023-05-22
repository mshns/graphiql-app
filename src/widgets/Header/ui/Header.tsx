import { type FC, MutableRefObject } from 'react';
import AppBar from '@mui/material/AppBar';
import { Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  header: MutableRefObject<HTMLDivElement | null>;
};

export const Header: FC<Props> = ({ header }) => {
  return (
    <AppBar ref={header} position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'secondary.main' }}>
          GraphiQL
        </Typography>
        <ButtonGroup size="small" color="secondary" aria-label="small button group">
          <Button sx={{ color: 'primary.contrastText' }}>Sign In</Button>
          <Button sx={{ color: 'primary.contrastText' }}>Sign Up</Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
