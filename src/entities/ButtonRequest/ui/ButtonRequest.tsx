import { FC, useContext } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { gql } from 'graphql-request';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ButtonStyled, PlaygroundContext, useAppActions, useAppSelector, usePrettifyEditors } from 'shared';

export const ButtonRequest: FC = () => {
  const { setIsResponseOpen, setResponseStatus } = useContext(PlaygroundContext);
  const { query, variables, headers } = useAppSelector((state) => state.editorReducer);
  const { setRequestObject } = useAppActions();
  const { prettifyHandler } = usePrettifyEditors();
  const { t } = useTranslation('playground');

  const requesthandler = async () => {
    setResponseStatus(0);
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
    <Tooltip title={t('Request')} disableInteractive>
      <ButtonStyled onClick={() => requesthandler()} sx={{ minWidth: 'auto' }}>
        <PlayCircleOutlineIcon />
      </ButtonStyled>
    </Tooltip>
  );
};
