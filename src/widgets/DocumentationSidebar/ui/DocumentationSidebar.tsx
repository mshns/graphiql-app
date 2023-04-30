import { FC } from 'react';
import { useQuery } from '@apollo/client';
import { INTROSPECTION } from '../api/graphql/introspection';

const DocumentationSideBar: FC = () => {
  const { data } = useQuery(INTROSPECTION);

  return <>{data}</>;
};

export default DocumentationSideBar;
