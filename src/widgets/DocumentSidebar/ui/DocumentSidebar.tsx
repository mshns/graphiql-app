import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
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
import { useAppSelector, useIntrospection } from 'shared';

const DocumentSideBar: FC = () => {
  const { introspection, isLoading } = useIntrospection();
  const breadCrumbsState = useAppSelector((state) => state.documentReducer);
  const { typeAsField, currentType } = useTypesInfo(introspection, breadCrumbsState);
  const { breadCrumbs } = breadCrumbsState;

  return (
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
  );
};

export default DocumentSideBar;
