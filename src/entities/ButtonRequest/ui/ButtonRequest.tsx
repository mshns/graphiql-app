import { FC, useContext } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { gql } from 'graphql-request';
import { ButtonStyled, PlaygroundContext, useAppActions, useAppSelector, usePrettifyEditors } from 'shared';

export const ButtonRequest: FC = () => {
  const { setIsResponseOpen } = useContext(PlaygroundContext);
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

      setIsResponseOpen(true);
      setRequestObject({ query: queryRequest, variables: variablesRequest, headers: headersRequest });
    }
  };

  return (
    <ButtonStyled onClick={() => requesthandler()} sx={{ minWidth: 'auto' }}>
      <PlayCircleOutlineIcon />
    </ButtonStyled>
  );
};
