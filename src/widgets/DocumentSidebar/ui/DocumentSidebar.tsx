import { FC } from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { useAppSelector, useIntrospection } from 'shared';
import {
  DocumentBreadCrumbs,
  DocumentTypeHeader,
  DocumentArgs,
  DocumentFields,
  DocumentRoot,
  DocumentPossibleTypes,
  DocumentMetaData
} from 'features';
import { useTypesInfo } from '../model';

export const DocumentSideBar: FC = () => {
  const { introspection, isLoading } = useIntrospection();
  const breadCrumbsState = useAppSelector((state) => state.documentReducer);
  const { typeAsField, currentType } = useTypesInfo(breadCrumbsState, introspection);
  const { breadCrumbs } = breadCrumbsState;

  return (
    <Grid xl={3} lg={3} item={true} sx={{ height: '100%', overflow: 'auto' }}>
      <Box>
        <h3>Documentation</h3>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <DocumentBreadCrumbs />
            {breadCrumbs.length < 2 ? (
              <DocumentRoot introspection={introspection} />
            ) : (
              <section>
                <DocumentTypeHeader typeAsField={typeAsField} />

                {typeAsField?.description ? <p>{typeAsField?.description}</p> : null}

                <DocumentArgs typeAsField={typeAsField} />
                <DocumentMetaData currentType={currentType} />
                <DocumentFields currentType={currentType} />
                <DocumentPossibleTypes currentType={currentType} introspection={introspection} />
              </section>
            )}
          </>
        )}
      </Box>
    </Grid>
  );
};
