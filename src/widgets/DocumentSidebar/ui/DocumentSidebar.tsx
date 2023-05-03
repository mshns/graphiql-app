import { FC } from 'react';
import { CircularProgress } from '@mui/material';
import { DocumentBreadCrumbs, DocumentTypeHeader, DocumentArgs, DocumentFields, DocumentRoot } from 'features';
import { useTypesInfo } from '../model';
import { useAppSelector, useIntrospection } from 'shared';

const DocumentSideBar: FC = () => {
  const { introspection, isLoading } = useIntrospection();
  const breadCrumbsState = useAppSelector((state) => state.documentReducer);
  const { typeAsField, currentType } = useTypesInfo(introspection, breadCrumbsState);
  const { breadCrumbs } = breadCrumbsState;

  return (
    <section>
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
              <DocumentArgs typeAsField={typeAsField} />
              <DocumentFields currentType={currentType} />
            </section>
          )}
        </>
      )}
    </section>
  );
};

export default DocumentSideBar;
