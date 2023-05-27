import { FC, KeyboardEvent, MutableRefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Codemirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useTheme } from '@mui/material';
import { autocompletion } from '@codemirror/autocomplete';
import {
  EXTENTIONS,
  headersAutocomplition,
  TOAST_MESSAGES,
  useJsonParseGuard,
  useLintEditorErrors,
  useVariablesAutocomplition
} from 'shared';

type Props = {
  editorRef: MutableRefObject<ReactCodeMirrorRef | null>;
  action: ActionCreatorWithPayload<string, 'Editor/setVariables' | 'Editor/setHeaders'>;
  state: string;
  terminalName: 'variables' | 'headers';
};

export const TerminalConfig: FC<Props> = ({ editorRef, action, state, terminalName }) => {
  const { jsonParseGuard } = useJsonParseGuard();
  const { lintEditorErrors } = useLintEditorErrors();
  const { variablesAutocomplition } = useVariablesAutocomplition();

  const theme = useTheme();
  const { t } = useTranslation();

  const handleChange = useCallback(
    (value: string) => {
      action(value);
    },
    [action]
  );

  const handlePrettify = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'KeyF' && e.getModifierState('Shift') && e.getModifierState('Alt')) {
      const isEditorPass = lintEditorErrors(editorRef, t(`${TOAST_MESSAGES[`${terminalName}Lint`]}`));

      if (isEditorPass) {
        jsonParseGuard(state, action, t(`${TOAST_MESSAGES[`${terminalName}Parse`]}`));
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
      extensions={[
        ...EXTENTIONS,
        json(),
        linter(jsonParseLinter()),
        autocompletion({
          defaultKeymap: false,
          activateOnTyping: true,
          override: [terminalName === 'headers' ? headersAutocomplition : variablesAutocomplition]
        })
      ]}
    />
  );
};
