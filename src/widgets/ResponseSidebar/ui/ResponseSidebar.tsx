import { FC, useContext } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { PlaygroundContext, getLazyComponent, useAppSelector } from 'shared';
import { ResponseDrawerStyled } from './ResponseDrawer.styled';

const TerminalResponse = getLazyComponent('entities', 'TerminalResponse');

export const ResponseSidebar: FC = () => {
  const { requestObject } = useAppSelector((state) => state.editorReducer);
  const { isResponseOpen, setIsResponseOpen, setResponseStatus } = useContext(PlaygroundContext);

  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  if (!requestObject) {
    return null;
  }

  return (
    <ResponseDrawerStyled
      variant={isLessMd ? 'temporary' : 'permanent'}
      anchor="right"
      open={isResponseOpen}
      onClose={() => setIsResponseOpen(false)}
    >
      <TerminalResponse {...{ setResponseStatus }} />
    </ResponseDrawerStyled>
  );
};
