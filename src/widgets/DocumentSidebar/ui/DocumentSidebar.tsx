import { FC } from 'react';
import { DocumentBreadCrumbs, DocumentTypeHeader, DocumentArgs, DocumentFields, DocumentRoot } from 'features';
import { useAppSelector, useIntrospection, useTypesInfo } from 'shared';
// import { GraphQLObjectType, OperationTypeNode } from 'graphql';

const DocumentSideBar: FC = () => {
  const { introspection } = useIntrospection();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.breadCrumbsReducer);
  const { fieldInfo, thisType } = useTypesInfo(introspection, breadCrumbs, currentTypeName);

  // useEffect(() => {
  //   if (schema) {
  //     const a = schema.current?.getRootType(OperationTypeNode.QUERY);
  //     const b = schema.current?.getType('FilmsConnection');
  //     if (b && 'getFields' in b) {
  //       console.log(b.getFields());
  //     }
  //   }
  // }, [schema]);

  return (
    <section>
      <h3>Documentation</h3>
      {!currentTypeName ? (
        <DocumentRoot introspection={introspection} />
      ) : (
        <section>
          <DocumentBreadCrumbs />
          <DocumentTypeHeader fieldInfo={fieldInfo} />
          <DocumentArgs fieldInfo={fieldInfo} />
          <DocumentFields thisType={thisType} />
        </section>
      )}
    </section>
  );
};

export default DocumentSideBar;
