import { FC, lazy, Suspense } from 'react';
import { CircularProgress, Divider, Grid, Paper } from '@mui/material';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import { QueryConfigBar, QueryTerminal } from 'widgets';
import { RequestButton } from 'features';
import { useAppActions, useAppSelector, useIntrospection } from 'shared';
import { DocButton } from './DocButton.styled';

const DocumentationSideBar = lazy(() => import('widgets/DocumentSidebar'));
const ResponseBar = lazy(() => import('widgets/ResponseBar'));

export const PlayGround: FC = () => {
  const { schema } = useIntrospection();
  const { isDocumentOpen } = useAppSelector((state) => state.documentReducer);
  const { setIsDocumentOpen } = useAppActions();
  const { requestObject } = useAppSelector((state) => state.editorReducer);

  return (
    <Grid container sx={{ height: '100%', backgroundColor: '#f3f3f3', p: 3, position: 'relative' }}>
      <Suspense fallback={<CircularProgress />}>
        {isDocumentOpen ? (
          <DocumentationSideBar />
        ) : (
          <DocButton variant="contained" onClick={() => setIsDocumentOpen()}>
            <BookOutlinedIcon />
          </DocButton>
        )}
      </Suspense>

      <Grid xl={isDocumentOpen ? 5 : 8} lg={isDocumentOpen ? 5 : 8} item={true} sx={{ p: 1, height: '100%' }}>
        <Paper sx={{ height: '100%', boxShadow: 3, position: 'relative' }}>
          <QueryTerminal schema={schema} />
          <RequestButton />

          <Divider />

          <QueryConfigBar schema={schema} />
        </Paper>
      </Grid>

      <Grid xl={4} lg={4} item={true} sx={{ p: 1, height: '100%' }}>
        <Suspense fallback={<CircularProgress />}>{!!requestObject && <ResponseBar />}</Suspense>
      </Grid>
    </Grid>
  );
};
