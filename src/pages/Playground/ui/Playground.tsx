import { FC, Suspense, useState } from 'react';
import { Grid } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { DocumentationDrawer, Editor, ResponseSidebar } from 'widgets';
import { PlaygroundContext, Spinner } from 'shared';
import { PlaygroundTools } from 'features';
import { ResponseLoader } from 'entities';
import { useButtonHeight } from '../hooks/useButtonHeight';
import { DocumentGrid, WorkspaceGrid, ResponseGrid, EditorGrid } from './grid';

type OutletContext = { barsHeight: number };

export const PlayGround: FC = () => {
  const [responseStatus, setResponseStatus] = useState(0);
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const [isResponseOpen, setIsResponseOpen] = useState(false);

  const { barsHeight } = useOutletContext<OutletContext>();

  const { playgroundTools, buttonHeight } = useButtonHeight();

  const playgroundContext = {
    playgroundTools,
    responseStatus,
    setResponseStatus,
    isDocumentOpen,
    setIsDocumentOpen,
    isResponseOpen,
    setIsResponseOpen
  };

  return (
    <PlaygroundContext.Provider value={playgroundContext}>
      <Grid container height={`calc(100vh - ${barsHeight}px)`}>
        <DocumentGrid>
          <Suspense fallback={<Spinner />}>
            <DocumentationDrawer />
          </Suspense>
        </DocumentGrid>

        <WorkspaceGrid>
          <>
            <PlaygroundTools />

            <Grid container height={`calc(100% - ${buttonHeight || 0}px)`} item mt={1} pl={2}>
              <EditorGrid>
                <Editor />
              </EditorGrid>

              <ResponseGrid>
                <Suspense fallback={<ResponseLoader />}>
                  <ResponseSidebar />
                </Suspense>
              </ResponseGrid>
            </Grid>
          </>
        </WorkspaceGrid>
      </Grid>
    </PlaygroundContext.Provider>
  );
};
