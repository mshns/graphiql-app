import { MutableRefObject, useCallback } from 'react';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { diagnosticCount } from '@codemirror/lint';
import { TOAST_TYPES } from '../../constants';
import { useThrowToastify } from './useThrowToastify';

type LintEditorErrors = (editorRef: MutableRefObject<ReactCodeMirrorRef | null>, message: string) => boolean;

export const useLintEditorErrors = () => {
  const { throwToastify } = useThrowToastify();

  const lintEditorErrors = useCallback<LintEditorErrors>(
    (editorRef, message) => {
      if (editorRef.current?.view?.state) {
        const isAnyLintErrors = diagnosticCount(editorRef.current?.view?.state);

        if (isAnyLintErrors) {
          throwToastify(message, TOAST_TYPES.warning);

          return false;
        }
      }

      return true;
    },
    [throwToastify]
  );

  return { lintEditorErrors };
};
