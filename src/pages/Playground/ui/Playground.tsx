import { FC, Suspense, useState } from 'react';
import { Backdrop, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { Editor } from 'widgets';
import { ButtonDocument, ResponseStatus } from 'entities';
import { DrawerContext, Spinner, getLazyComponent, useAppSelector } from 'shared';
import { useButtonHeight } from '../hooks/useButtonHeight';
import { DocDrawerStyled } from './DocDrawer.styled';
import { ResponseDrawerStyled } from './ResponseDrawer.styled';

type OutletContext = { barsHeight: number };

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentSideBar');
const TerminalResponse = getLazyComponent('entities', 'TerminalResponse');

export const PlayGround: FC = () => {
  const [responseStatus, setResponseStatus] = useState(0);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const theme = useTheme();
  const isLessLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  const { barsHeight } = useOutletContext<OutletContext>();
  const { requestObject } = useAppSelector((state) => state.editorReducer);

  const { docButton, buttonHeight } = useButtonHeight();

  return (
    <Grid container height={`calc(100vh - ${barsHeight}px)`}>
      <Grid
        height="100%"
        overflow="auto"
        position="relative"
        xl={isDocumentOpen ? 3 : 0}
        lg={isDocumentOpen ? 3 : 0}
        md={0}
        sm={0}
        xs={0}
        item
      >
        <Suspense fallback={<Spinner />}>
          <DocDrawerStyled
            variant={isLessLg ? 'temporary' : 'persistent'}
            anchor="left"
            open={isDocumentOpen}
            onClose={() => setIsDocumentOpen(false)}
          >
            <DocumentationSideBar />
          </DocDrawerStyled>
        </Suspense>
      </Grid>

      <Grid
        display="flex"
        height="100%"
        flexDirection="column"
        xl={isDocumentOpen ? 9 : 12}
        lg={isDocumentOpen ? 9 : 12}
        md={12}
        sm={12}
        xs={12}
        item
      >
        <Box display="flex" justifyContent="space-between">
          <ButtonDocument {...{ docButton, isDocumentOpen, setIsDocumentOpen }} />
          <ResponseStatus {...{ responseStatus }} />
        </Box>

        <Grid container height={`calc(100% - ${buttonHeight || 0}px)`} item mt={1} pl={2}>
          <Grid display="flex" height="100%" item xl={6} lg={6} md={6} sm={12} xs={12}>
            <DrawerContext.Provider value={{ setIsResponseOpen }}>
              <Editor />
            </DrawerContext.Provider>
          </Grid>

          <Grid
            display="flex"
            position="relative"
            height="100%"
            justifyContent="center"
            item
            xl={6}
            lg={6}
            md={6}
            sm={0}
            xs={0}
          >
            <Suspense
              fallback={
                isLessMd ? (
                  <Backdrop open={true}>
                    <Spinner />
                  </Backdrop>
                ) : (
                  <Spinner />
                )
              }
            >
              {!!requestObject && (
                <ResponseDrawerStyled
                  variant={isLessMd ? 'temporary' : 'permanent'}
                  anchor="right"
                  open={isResponseOpen}
                  onClose={() => setIsResponseOpen(false)}
                >
                  <TerminalResponse {...{ setResponseStatus }} />
                </ResponseDrawerStyled>
              )}
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
