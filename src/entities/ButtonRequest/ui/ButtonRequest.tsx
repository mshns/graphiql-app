import { FC } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { gql } from 'graphql-request';
import { Button } from '@mui/material';
import { useAppActions, useAppSelector, usePrettifyEditors } from 'shared';

export const ButtonRequest: FC = () => {
  const { query, variables, headers } = useAppSelector((state) => state.editorReducer);
  const { setRequestObject } = useAppActions();
  const { prettifyHandler } = usePrettifyEditors();

  const requesthandler = async () => {
    const isAllEditorsValid = await prettifyHandler();

    if (isAllEditorsValid) {
      const queryRequest = gql`
        ${query}
      `;

      const variablesRequest = JSON.parse(variables);
      const headersRequest = JSON.parse(headers);

      setRequestObject({ query: queryRequest, variables: variablesRequest, headers: headersRequest });
    }
  };

  return (
    <Button onClick={() => requesthandler()} sx={{ minWidth: 'auto' }}>
      <PlayCircleOutlineIcon />
    </Button>
  );
};
