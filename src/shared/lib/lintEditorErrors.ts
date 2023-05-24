import { MutableRefObject } from 'react';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { diagnosticCount } from '@codemirror/lint';
import { TOAST_MESSAGES, TOAST_TYPES } from '../constants';
import { throwToastify } from '../lib/throwToastify';

type LintEditorErrors = (
  editorRef: MutableRefObject<ReactCodeMirrorRef | null>,
  terminalName: 'variables' | 'headers' | 'query'
) => boolean;

export const lintEditorErrors: LintEditorErrors = (editorRef, terminalName) => {
  if (editorRef.current?.view?.state) {
    const isAnyLintErrors = diagnosticCount(editorRef.current?.view?.state);

    if (isAnyLintErrors) {
      throwToastify(TOAST_MESSAGES[`${terminalName}Lint`], TOAST_TYPES.warning);

      return false;
    }
  }

  return true;
};
