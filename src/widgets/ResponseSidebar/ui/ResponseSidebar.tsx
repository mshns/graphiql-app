import { FC, Suspense, useContext } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { PlaygroundContext, getLazyComponent, useAppSelector, Spinner } from 'shared';
import { ButtonClose } from 'entities';
import { ResponseDrawerStyled } from './ResponseDrawer.styled';

const TerminalResponse = getLazyComponent('entities', 'TerminalResponse');

export const ResponseSidebar: FC = () => {
  const { requestObject } = useAppSelector((state) => state.editorReducer);
  const { isResponseOpen, setIsResponseOpen } = useContext(PlaygroundContext);

  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

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
      {isLessMd ? <ButtonClose side="right" handler={handleClose} /> : null}

      <Suspense fallback={<Spinner />}>
        <TerminalResponse />
      </Suspense>
    </ResponseDrawerStyled>
  );
};
