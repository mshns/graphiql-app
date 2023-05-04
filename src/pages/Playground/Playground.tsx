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
        <Grid xl={3} lg={3} item={true} sx={{ height: '100%', overflow: 'auto' }}>
          <Suspense fallback={<CircularProgress />}>
            <DocumentationSideBar />
          </Suspense>
        </Grid>
      )}
      <Grid xl={isDocumentOpen ? 5 : 8} lg={isDocumentOpen ? 5 : 8} item={true}>
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
