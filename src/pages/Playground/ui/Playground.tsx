import { FC, Suspense, useState } from 'react';
import { Grid } from '@mui/material';
import { useOutletContext } from 'react-router-dom';
import { Editor } from 'widgets';
import { DocumentButton } from 'entities';
import { Spinner, getLazyComponent, useAppSelector } from 'shared';

type OutletContext = { playgroundHeight: number };

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentSideBar');
const ResponseBar = getLazyComponent('features', 'ResponseBar');

export const PlayGround: FC = () => {
  const { playgroundHeight } = useOutletContext<OutletContext>();
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const { requestObject } = useAppSelector((state) => state.editorReducer);

  return (
    <Grid container height={playgroundHeight}>
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
        gap="0.5em"
        flexDirection="column"
        xl={isDocumentOpen ? 9 : 12}
        lg={isDocumentOpen ? 9 : 12}
        item
      >
        <DocumentButton isDocumentOpen={isDocumentOpen} setIsOpen={setIsDocumentOpen} />

        <Grid container height="97%" item spacing={2} pl="1em">
          <Grid display="flex" height="100%" item xl={6} lg={6}>
            <Editor />
          </Grid>

          <Grid display="flex" position="relative" height="100%" justifyContent="center" item xl={6} lg={6}>
            <Suspense fallback={<Spinner />}>{!!requestObject && <ResponseBar />}</Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
