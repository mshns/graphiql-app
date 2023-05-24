import { useCallback, useContext } from 'react';
import { EditorContext } from '../context';
import { useAppActions, useAppSelector } from '../hooks';
import { lintEditorErrors, graphqlParseGuard, jsonParseGuard } from '../../lib';

export const usePrettifyEditors = () => {
  const { query, variables, headers } = useAppSelector((state) => state.editorReducer);
  const { setQuery, setVariables, setHeaders } = useAppActions();
  const { headersRef, queryRef, variablesRef } = useContext(EditorContext);

  const prettifyHandler = useCallback(async () => {
    const isQueryPass = lintEditorErrors(queryRef, 'query');
    const isHeadersPass = lintEditorErrors(headersRef, 'headers');
    const isVarialesPass = lintEditorErrors(variablesRef, 'variables');

    let isQueryParsed = false;
    let isVarsParsed = false;
    let isHeadersParsed = false;

    if (isQueryPass) {
      isQueryParsed = await graphqlParseGuard(query, setQuery);
    }

    if (isVarialesPass) {
      isVarsParsed = jsonParseGuard(variables, setVariables, 'variables');
    }

    if (isHeadersPass) {
      isHeadersParsed = jsonParseGuard(headers, setHeaders, 'headers');
    }

    return isQueryParsed && isVarsParsed && isHeadersParsed;
  }, [headersRef, queryRef, variablesRef, headers, variables, query, setHeaders, setQuery, setVariables]);

  return { prettifyHandler };
};
