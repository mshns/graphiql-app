import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { TOAST_MESSAGES } from '../../constants';
import { EditorContext } from '../context';
import { useAppActions, useAppSelector, useLintEditorErrors, useJsonParseGuard, useGraphqlParseGuard } from '../hooks';

export const usePrettifyEditors = () => {
  const { query, variables, headers } = useAppSelector((state) => state.editorReducer);
  const { setQuery, setVariables, setHeaders } = useAppActions();
  const { headersRef, queryRef, variablesRef } = useContext(EditorContext);

  const { lintEditorErrors } = useLintEditorErrors();
  const { jsonParseGuard } = useJsonParseGuard();
  const { graphqlParseGuard } = useGraphqlParseGuard();

  const { t } = useTranslation('toastify');

  const prettifyHandler = useCallback(async () => {
    const isQueryPass = lintEditorErrors(queryRef, t(`${TOAST_MESSAGES['queryLint']}`));
    const isHeadersPass = lintEditorErrors(headersRef, t(`${TOAST_MESSAGES['headersLint']}`));
    const isVarialesPass = lintEditorErrors(variablesRef, t(`${TOAST_MESSAGES['variablesLint']}`));

    let isQueryParsed = false;
    let isVarsParsed = false;
    let isHeadersParsed = false;

    if (isQueryPass) {
      isQueryParsed = await graphqlParseGuard(query, setQuery);
    }

    if (isVarialesPass) {
      isVarsParsed = jsonParseGuard(variables, setVariables, t(`${TOAST_MESSAGES['variablesParse']}`));
    }

    if (isHeadersPass) {
      isHeadersParsed = jsonParseGuard(headers, setHeaders, t(`${TOAST_MESSAGES['headersParse']}`));
    }

    return isQueryParsed && isVarsParsed && isHeadersParsed;
  }, [
    headersRef,
    queryRef,
    variablesRef,
    headers,
    variables,
    query,
    setHeaders,
    setQuery,
    setVariables,
    t,
    lintEditorErrors,
    jsonParseGuard,
    graphqlParseGuard
  ]);

  return { prettifyHandler };
};
