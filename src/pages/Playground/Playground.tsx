import { FC, lazy, Suspense, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { QueryConfigBar, QueryTerminal, ResponseBar } from 'widgets';
import { Grid } from '@mui/material';

const DocumentationSideBar = lazy(() => import('widgets'));

export const PlayGround: FC = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  setIsOpenSideBar(true);

  return (
    <Grid container>
      <Grid xl={4} lg={4}>
        {isOpenSideBar && (
          <Suspense fallback={<CircularProgress />}>
            <DocumentationSideBar />
          </Suspense>
        )}
      </Grid>
      <Grid xl={4} lg={4}>
        <Grid>
          <QueryTerminal />
        </Grid>
        <Grid>
          <QueryConfigBar />
        </Grid>
      </Grid>
      <Grid xl={4} lg={4}>
        <ResponseBar />
      </Grid>
    </Grid>
  );
};
