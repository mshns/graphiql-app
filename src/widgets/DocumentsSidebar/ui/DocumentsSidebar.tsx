import { FC } from 'react';
import { DocumentsBreadCrumbs, DocumentsTypeHeader, DocumentsArgs, DocumentsFields } from 'features';
import { useAppSelector, useIntrospection, useTypesInfo } from 'shared';

const DocumentsSideBar: FC = () => {
  const { introspection } = useIntrospection();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.breadCrumbsReducer);
  const { fieldInfo, thisType } = useTypesInfo(introspection, breadCrumbs, currentTypeName);

  // console.log(introspection);

  return (
    <section>
      <h3>Documentation</h3>
      <DocumentsBreadCrumbs />
      <DocumentsTypeHeader fieldInfo={fieldInfo} />
      <DocumentsArgs fieldInfo={fieldInfo} />
      <DocumentsFields thisType={thisType} />
    </section>
  );
};

export default DocumentsSideBar;
