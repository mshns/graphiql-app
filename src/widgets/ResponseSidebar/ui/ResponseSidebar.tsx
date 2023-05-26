import { Dispatch, FC, SetStateAction } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { IRequestObject, getLazyComponent } from 'shared';
import { ResponseDrawerStyled } from './ResponseDrawer.styled';

type Props = {
  requestObject: IRequestObject | null;
  isResponseOpen: boolean;
  setIsResponseOpen: Dispatch<SetStateAction<boolean>>;
  setResponseStatus: Dispatch<SetStateAction<number>>;
};

const TerminalResponse = getLazyComponent('entities', 'TerminalResponse');

export const ResponseSidebar: FC<Props> = ({ requestObject, isResponseOpen, setIsResponseOpen, setResponseStatus }) => {
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
