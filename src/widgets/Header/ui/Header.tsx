import { type FC, MutableRefObject, useState, Suspense } from 'react';
import { ButtonGroup, Drawer, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { ButtonClose, HeaderLogo, HeaderSettingsButton } from 'entities';
import { HeaderAuthButtons, HeaderScroll, HeaderSettingsMenu } from 'features';
import { Spinner } from 'shared';

type Props = {
  header: MutableRefObject<HTMLDivElement | null>;
};

export const Header: FC<Props> = ({ header }) => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
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
            onClose={toggleSettings}
            sx={{
              '& .MuiDrawer-paper': {
                width: '250px',
                padding: 2,
                backgroundColor: 'background.default'
              }
            }}
          >
            <Suspense fallback={<Spinner />}>
              <ButtonClose side="right" handler={toggleSettings} />

              <HeaderSettingsMenu />
            </Suspense>
          </Drawer>
        </Toolbar>
      </AppBar>
    </HeaderScroll>
  );
};
