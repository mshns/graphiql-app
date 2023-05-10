import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Spinner, useAppSelector, useIntrospection } from 'shared';
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
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Documentation
      </Typography>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <DocumentBreadCrumbs />
          {breadCrumbs.length < 2 ? (
            <DocumentRoot introspection={introspection} />
          ) : (
            <Box>
              <DocumentTypeHeader typeAsField={typeAsField} />

              {typeAsField?.description ? <Typography variant="body2">{typeAsField?.description}</Typography> : null}

              <DocumentArgs typeAsField={typeAsField} />
              <DocumentMetaData currentType={currentType} />
              <DocumentFields currentType={currentType} />
              <DocumentPossibleTypes currentType={currentType} introspection={introspection} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
