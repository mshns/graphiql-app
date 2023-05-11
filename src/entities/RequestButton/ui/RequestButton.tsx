import { FC } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { gql } from 'graphql-request';
import { Button } from '@mui/material';
import { isGqlValid, useAppActions, useAppSelector } from 'shared';

export const RequestButton: FC = () => {
  const { query, variables } = useAppSelector((state) => state.editorReducer);
  const { setRequestObject } = useAppActions();

  const requesthandler = () => {
    setRequestObject(null);
    const validatonResult = isGqlValid(query);

    if (validatonResult instanceof Error) {
      // console.log(validatonResult.message);
      return;
    }

    const queryRequest = gql`
      ${query}
    `;
    const variablesRequest = JSON.parse(variables);

    setRequestObject({ query: queryRequest, variables: variablesRequest });
  };

  return (
    <Button onClick={() => requesthandler()} sx={{ minWidth: 'auto' }}>
      <PlayCircleOutlineIcon />
    </Button>
  );
};
