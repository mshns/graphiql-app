import { FC } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { toast } from 'react-toastify';
import { gql } from 'graphql-request';
import { Button } from '@mui/material';
import { useAppActions, useAppSelector } from 'shared';

export const ButtonRequest: FC = () => {
  const { query, variables, headers } = useAppSelector((state) => state.editorReducer);
  const { setRequestObject } = useAppActions();

  const requesthandler = () => {
    setRequestObject(null);

    const queryRequest = gql`
      ${query}
    `;

    try {
      const variablesRequest = JSON.parse(variables);
      const headersRequest = JSON.parse(headers);

      setRequestObject({ query: queryRequest, variables: variablesRequest, headers: headersRequest });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message, {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light'
        });
      }
    }
  };

  return (
    <Button onClick={() => requesthandler()} sx={{ minWidth: 'auto' }}>
      <PlayCircleOutlineIcon />
    </Button>
  );
};
