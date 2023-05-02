import { FC } from 'react';
import { DocumentBreadCrumbs, DocumentTypeHeader, DocumentArgs, DocumentFields } from 'features';
import { useAppSelector, useIntrospection, useTypesInfo } from 'shared';

const DocumentSideBar: FC = () => {
  const { introspection } = useIntrospection();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.breadCrumbsReducer);
  const { fieldInfo, thisType } = useTypesInfo(introspection, breadCrumbs, currentTypeName);

  // console.log(introspection);

  if (!currentTypeName) {
    return (
      <section>
        <h3>Root Types</h3>
      </section>
    );
  }

  return (
    <section>
      <h3>Documentation</h3>
      <DocumentBreadCrumbs />
      <DocumentTypeHeader fieldInfo={fieldInfo} />
      <DocumentArgs fieldInfo={fieldInfo} />
      <DocumentFields thisType={thisType} />
    </section>
  );
};

export default DocumentSideBar;
