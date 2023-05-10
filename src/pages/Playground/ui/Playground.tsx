import { FC, Suspense, useState } from 'react';
import { Grid } from '@mui/material';
import { Editor } from 'widgets';
import { DocumentButton } from 'entities';
import { Spinner, getLazyComponent, useAppSelector } from 'shared';

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentSideBar');
const ResponseBar = getLazyComponent('features', 'ResponseBar');

export const PlayGround: FC = () => {
  const [isDocumentOpen, setIsDocumentOpen] = useState(false);
  const { requestObject } = useAppSelector((state) => state.editorReducer);

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid
        xl={isDocumentOpen ? 3 : 0}
        lg={isDocumentOpen ? 3 : 0}
        item
        sx={{ height: '100%', overflow: 'auto', p: isDocumentOpen ? 1 : 0, position: 'relative' }}
      >
        <Suspense fallback={<Spinner />}>{isDocumentOpen && <DocumentationSideBar />}</Suspense>
      </Grid>

      <Grid
        xl={isDocumentOpen ? 9 : 12}
        lg={isDocumentOpen ? 9 : 12}
        item
        sx={{ display: 'flex', height: '100%', gap: '0.5em', flexDirection: 'column' }}
      >
        <DocumentButton isDocumentOpen={isDocumentOpen} setIsOpen={setIsDocumentOpen} />

        <Grid container sx={{ flex: 1, maxHeight: '90%' }} item spacing={2}>
          <Grid item xl={6} lg={6} sx={{ display: 'flex', height: '100%' }}>
            <Editor />
          </Grid>

          <Grid
            item
            xl={6}
            lg={6}
            sx={{ height: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            <Suspense fallback={<Spinner />}>{!!requestObject && <ResponseBar />}</Suspense>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
