import { FC, KeyboardEvent, MutableRefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Codemirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useTheme } from '@mui/material';
import { EXTENTIONS, TOAST_MESSAGES, jsonParseGuard, lintEditorErrors } from 'shared';

type Props = {
  editorRef: MutableRefObject<ReactCodeMirrorRef | null>;
  action: ActionCreatorWithPayload<string, 'Editor/setVariables' | 'Editor/setHeaders'>;
  state: string;
  terminalName: 'variables' | 'headers';
};

export const TerminalConfig: FC<Props> = ({ editorRef, action, state, terminalName }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const { t } = useTranslation();

  const handleChange = useCallback(
    (value: string) => {
      action(value);
    },
    [action]
  );

  const handlePrettify = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'KeyF' && e.getModifierState('Shift') && e.getModifierState('Alt')) {
      const isEditorPass = lintEditorErrors(editorRef, t(`${TOAST_MESSAGES[`${terminalName}Lint`]}`), mode);

      if (isEditorPass) {
        jsonParseGuard(state, action, t(`${TOAST_MESSAGES[`${terminalName}Parse`]}`), mode);
      }
    }
  };

  const handleBlur = () => {
    if (!state) {
      action('{}');
    }
  };

  return (
    <Codemirror
      ref={editorRef}
      style={{ overflow: 'hidden', maxHeight: '100%', flex: '1 1 auto' }}
      max-height="100%"
      theme={theme.palette.mode}
      value={state}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handlePrettify}
      indentWithTab={false}
      basicSetup={{
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
        defaultKeymap: false,
        completionKeymap: false
      }}
      extensions={[...EXTENTIONS, json(), linter(jsonParseLinter())]}
    />
  );
};
