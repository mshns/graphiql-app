import { FC, lazy, Suspense, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { QueryConfigBar, QueryTerminal, ResponseBar } from 'widgets';
import { Grid } from '@mui/material';

const DocumentationSideBar = lazy(() => import('widgets'));

export const PlayGround: FC = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  useEffect(() => {
    setIsOpenSideBar(true);
  }, []);

  return (
    <Grid container sx={{ height: '100%' }}>
      <Grid xl={4} lg={4} item={true}>
        {isOpenSideBar && (
          <Suspense fallback={<CircularProgress />}>
            <DocumentationSideBar />
          </Suspense>
        )}
      </Grid>
      <Grid xl={4} lg={4} item={true}>
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
