import { FC, lazy, Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { QueryConfigBar, QueryTerminal, ResponseBar } from 'widgets';
import { Grid } from '@mui/material';
import { useAppSelector } from 'shared';

const DocumentationSideBar = lazy(() => import('widgets'));

export const PlayGround: FC = () => {
  const { isDocumentOpen } = useAppSelector((state) => state.documentReducer);

  return (
    <Grid container sx={{ height: '100%' }}>
      {isDocumentOpen && (
        <Grid xl={4} lg={4} item={true}>
          <Suspense fallback={<CircularProgress />}>
            <DocumentationSideBar />
          </Suspense>
        </Grid>
      )}
      <Grid xl={isDocumentOpen ? 4 : 8} lg={isDocumentOpen ? 4 : 8} item={true}>
        <Grid>
          <QueryTerminal />
        </Grid>
        <Grid>
          <QueryConfigBar />
        </Grid>
      </Grid>
      <Grid xl={4} lg={4} item={true}>
        <ResponseBar />
      </Grid>
    </Grid>
  );
};
