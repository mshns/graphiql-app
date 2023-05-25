import { FC, Suspense, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { Editor } from 'widgets';
import { ButtonDocument, ResponseStatus } from 'entities';
import { Spinner, getLazyComponent, useAppSelector } from 'shared';
import { useButtonHeight } from '../hooks/useButtonHeight';

type OutletContext = { barsHeight: number };

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentSideBar');
const TerminalResponse = getLazyComponent('entities', 'TerminalResponse');

export const PlayGround: FC = () => {
  const [responseStatus, setResponseStatus] = useState(0);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);

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
        item
      >
        <Suspense fallback={<Spinner />}>{isDocumentOpen && <DocumentationSideBar />}</Suspense>
      </Grid>

      <Grid
        display="flex"
        height="100%"
        flexDirection="column"
        xl={isDocumentOpen ? 9 : 12}
        lg={isDocumentOpen ? 9 : 12}
        item
      >
        <Box display="flex" justifyContent="space-between">
          <ButtonDocument {...{ docButton, isDocumentOpen, setIsDocumentOpen }} />
          <ResponseStatus {...{ responseStatus }} />
        </Box>

        <Grid container height={`calc(100% - ${buttonHeight || 0}px)`} columnSpacing="0.5em" item mt="0.5em" pl="1em">
          <Grid display="flex" height="100%" item xl={6} lg={6}>
            <Editor />
          </Grid>

          <Grid display="flex" position="relative" height="100%" justifyContent="center" item xl={6} lg={6}>
            <Suspense fallback={<Spinner />}>
              {!!requestObject && <TerminalResponse {...{ setResponseStatus }} />}
            </Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
