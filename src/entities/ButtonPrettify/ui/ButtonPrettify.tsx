import { FC, useContext } from 'react';
import { Button } from '@mui/material';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import {
  useAppActions,
  useAppSelector,
  prettifyGraphql,
  EditorContext,
  jsonParseGuard,
  lintEditorErrors
} from 'shared';

export const ButtonPrettify: FC = () => {
  const { query, variables, headers } = useAppSelector((state) => state.editorReducer);
  const { setQuery, setVariables, setHeaders } = useAppActions();
  const { headersRef, queryRef, variablesRef } = useContext(EditorContext);

  const prettifyHandler = () => {
    const isQueryError = lintEditorErrors(queryRef, 'query');
    const isVarialesError = lintEditorErrors(headersRef, 'headers');
    const isHeadersError = lintEditorErrors(variablesRef, 'variables');

    if (!isQueryError) {
      prettifyGraphql(query, setQuery);
    }

    if (isVarialesError) {
      jsonParseGuard(variables, setVariables, 'variables');
    }

    if (isHeadersError) {
      jsonParseGuard(headers, setHeaders, 'headers');
    }
  };

  return (
    <Button onClick={() => prettifyHandler()} sx={{ minWidth: 'auto' }}>
      <FormatAlignLeftOutlinedIcon />
    </Button>
  );
};
