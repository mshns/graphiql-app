import { type FC, MutableRefObject, useState } from 'react';
import { ButtonGroup, Drawer, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { HeaderLogo, HeaderSettingsButton } from 'entities';
import { HeaderAuthButtons, HeaderScroll, HeaderSettingsMenu } from 'features';

type Props = {
  header: MutableRefObject<HTMLDivElement | null>;
};

export const Header: FC<Props> = ({ header }) => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = (open: boolean) => {
    setSettingsOpen(open);
  };

  return (
    <HeaderScroll>
      <AppBar ref={header} position="sticky">
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderLogo />

          <ButtonGroup variant="contained" size="small" aria-label="header button group">
            <HeaderAuthButtons />
            <HeaderSettingsButton {...{ toggleSettings }} />
          </ButtonGroup>

          <Drawer
            anchor="right"
            open={isSettingsOpen}
            onClose={() => toggleSettings(false)}
            sx={{
              '& .MuiDrawer-paper': {
                backgroundColor: 'background.default'
              }
            }}
          >
            <HeaderSettingsMenu />
          </Drawer>
        </Toolbar>
      </AppBar>
    </HeaderScroll>
  );
};
