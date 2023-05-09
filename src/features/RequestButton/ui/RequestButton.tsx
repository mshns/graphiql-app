import { FC } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { gql } from 'graphql-request';
import { isGqlValid, useAppActions, useAppSelector } from 'shared';
import { ReqButton } from './Button.styled';

export const RequestButton: FC = () => {
  const { query } = useAppSelector((state) => state.editorReducer);
  const { setRequestObject } = useAppActions();

  const requesthandler = () => {
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
    <ReqButton onClick={() => requesthandler()}>
      <PlayCircleOutlineIcon />
    </ReqButton>
  );
};
