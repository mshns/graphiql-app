import { FC, Suspense, useState } from 'react';
import { Grid } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { DocumentationDrawer, Editor, ResponseSidebar } from 'widgets';
import { DrawerContext, Spinner, useAppSelector } from 'shared';
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
  const { requestObject } = useAppSelector((state) => state.editorReducer);

  const { docButton, buttonHeight } = useButtonHeight();

  return (
    <Grid container height={`calc(100vh - ${barsHeight}px)`}>
      <DocumentGrid isDocumentOpen={isDocumentOpen}>
        <Suspense fallback={<Spinner />}>
          <DocumentationDrawer {...{ isDocumentOpen, setIsDocumentOpen }} />
        </Suspense>
      </DocumentGrid>

      <WorkspaceGrid isDocumentOpen={isDocumentOpen}>
        <>
          <PlaygroundTools {...{ docButton, isDocumentOpen, setIsDocumentOpen, responseStatus }} />

          <Grid container height={`calc(100% - ${buttonHeight || 0}px)`} item mt={1} pl={2}>
            <EditorGrid>
              <DrawerContext.Provider value={{ setIsResponseOpen }}>
                <Editor />
              </DrawerContext.Provider>
            </EditorGrid>

            <ResponseGrid>
              <Suspense fallback={<ResponseLoader />}>
                <ResponseSidebar {...{ requestObject, isResponseOpen, setIsResponseOpen, setResponseStatus }} />
              </Suspense>
            </ResponseGrid>
          </Grid>
        </>
      </WorkspaceGrid>
    </Grid>
  );
};
