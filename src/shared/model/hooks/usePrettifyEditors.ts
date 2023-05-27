import { useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import { TOAST_MESSAGES } from '../../constants';
import { EditorContext } from '../context';
import { useAppActions, useAppSelector } from '../hooks';
import { lintEditorErrors, graphqlParseGuard, jsonParseGuard } from '../../lib';

export const usePrettifyEditors = () => {
  const { query, variables, headers } = useAppSelector((state) => state.editorReducer);
  const { setQuery, setVariables, setHeaders } = useAppActions();
  const { headersRef, queryRef, variablesRef } = useContext(EditorContext);

  const { t } = useTranslation('toastify');

  const theme = useTheme();
  const mode = theme.palette.mode;

  const prettifyHandler = useCallback(async () => {
    const isQueryPass = lintEditorErrors(queryRef, t(`${TOAST_MESSAGES['queryLint']}`), mode);
    const isHeadersPass = lintEditorErrors(headersRef, t(`${TOAST_MESSAGES['headersLint']}`), mode);
    const isVarialesPass = lintEditorErrors(variablesRef, t(`${TOAST_MESSAGES['variablesLint']}`), mode);

    let isQueryParsed = false;
    let isVarsParsed = false;
    let isHeadersParsed = false;

    if (isQueryPass) {
      isQueryParsed = await graphqlParseGuard(query, setQuery, mode);
    }

    if (isVarialesPass) {
      isVarsParsed = jsonParseGuard(variables, setVariables, t(`${TOAST_MESSAGES['variablesParse']}`), mode);
    }

    if (isHeadersPass) {
      isHeadersParsed = jsonParseGuard(headers, setHeaders, t(`${TOAST_MESSAGES['headersParse']}`), mode);
    }

    return isQueryParsed && isVarsParsed && isHeadersParsed;
  }, [headersRef, queryRef, variablesRef, headers, variables, query, setHeaders, setQuery, setVariables, t, mode]);

  return { prettifyHandler };
};
