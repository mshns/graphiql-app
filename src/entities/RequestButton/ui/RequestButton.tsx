import { FC } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { gql } from 'graphql-request';
import { Button } from '@mui/material';
import { isGqlValid, useAppActions, useAppSelector } from 'shared';

export const RequestButton: FC = () => {
  const { query } = useAppSelector((state) => state.editorReducer);
  const { setRequestObject } = useAppActions();

  const requesthandler = () => {
    setRequestObject(null);
    const validatonResult = isGqlValid(query);

    if (validatonResult instanceof Error) {
      // console.log(validatonResult.message);
      return;
    }

    setRequestObject({
      query: gql`
        ${query}
      `
    });
  };

  return (
    <Button onClick={() => requesthandler()} sx={{ minWidth: 'auto' }}>
      <PlayCircleOutlineIcon />
    </Button>
  );
};
