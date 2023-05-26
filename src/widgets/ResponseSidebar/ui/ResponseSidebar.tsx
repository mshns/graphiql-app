import { FC, useContext } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonStyled, PlaygroundContext, getLazyComponent, useAppSelector } from 'shared';
import { ResponseDrawerStyled } from './ResponseDrawer.styled';

const TerminalResponse = getLazyComponent('entities', 'TerminalResponse');

export const ResponseSidebar: FC = () => {
  const { requestObject } = useAppSelector((state) => state.editorReducer);
  const { isResponseOpen, setIsResponseOpen } = useContext(PlaygroundContext);

  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('playground');

  const handleClose = () => setIsResponseOpen(false);

  if (!requestObject) {
    return null;
  }

  return (
    <ResponseDrawerStyled
      variant={isLessMd ? 'temporary' : 'permanent'}
      anchor="right"
      open={isResponseOpen}
      onClose={handleClose}
    >
      {isLessMd ? (
        <ButtonStyled onClick={handleClose}>
          {t('close')}
          <ChevronRightIcon fontSize="medium" />
        </ButtonStyled>
      ) : null}

      <TerminalResponse />
    </ResponseDrawerStyled>
  );
};
