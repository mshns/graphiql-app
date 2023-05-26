import { type FC, MutableRefObject, useState } from 'react';
import { ButtonGroup, Drawer, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTranslation } from 'react-i18next';
import { HeaderLogo, HeaderSettingsButton } from 'entities';
import { HeaderAuthButtons, HeaderScroll, HeaderSettingsMenu } from 'features';
import { ButtonStyled } from 'shared';

type Props = {
  header: MutableRefObject<HTMLDivElement | null>;
};

export const Header: FC<Props> = ({ header }) => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const { t } = useTranslation('playground');

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
                padding: 2,
                backgroundColor: 'background.default'
              }
            }}
          >
            <ButtonStyled onClick={toggleSettings}>
              {t('close')}
              <ChevronRightIcon fontSize="medium" />
            </ButtonStyled>

            <HeaderSettingsMenu />
          </Drawer>
        </Toolbar>
      </AppBar>
    </HeaderScroll>
  );
};
