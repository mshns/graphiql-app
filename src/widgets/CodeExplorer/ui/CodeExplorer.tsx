import { FC } from 'react';
import { DocumentationSideBar, QueryConfigBar, QueryTerminal, ResponseBar } from 'features';

export const CodeExplorer: FC = () => {
  return (
    <>
      <DocumentationSideBar />
      <QueryTerminal />
      <QueryConfigBar />
      <ResponseBar />
    </>
  );
};
