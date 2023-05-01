import { FC } from 'react';
import { DocumentsBreadCrumbs } from 'features';
import { useIntrospection } from 'shared';

const DocumentsSideBar: FC = () => {
  useIntrospection();

  return (
    <section>
      <h3>Documentation</h3>
      <DocumentsBreadCrumbs />
    </section>
  );
};

export default DocumentsSideBar;
