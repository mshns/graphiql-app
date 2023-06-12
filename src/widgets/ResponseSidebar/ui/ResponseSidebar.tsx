import { FC, Suspense, useContext } from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PlaygroundContext, getLazyComponent, Spinner, useAppSelector } from 'shared';
import { ButtonClose } from 'entities';
import { useGetResponse } from '../model';
import { ResponseDrawerStyled } from './ResponseDrawer.styled';

const TerminalResponse = getLazyComponent('entities', 'TerminalResponse');

export const ResponseSidebar: FC = () => {
  const { response } = useAppSelector((state) => state.editorReducer);
  const { isResponseOpen, setIsResponseOpen } = useContext(PlaygroundContext);
  const { isLoading } = useGetResponse();

  const { t } = useTranslation('playground');
  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => setIsResponseOpen(false);

  if (!response) {
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
        {isLessMd ? (
          <Typography variant="h6" sx={{ mb: 2 }}>
            {t('Response')}
          </Typography>
        ) : null}

        <TerminalResponse {...{ isLoading }} />
      </Suspense>
    </ResponseDrawerStyled>
  );
};
