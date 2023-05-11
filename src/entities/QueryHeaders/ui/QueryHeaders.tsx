import { FC, useCallback } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import Codemirror from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { useAppActions, useAppSelector, EXTENTIONS } from 'shared';

export const QueryHeaders: FC = () => {
  const { setHeaders } = useAppActions();
  const { headers } = useAppSelector((state) => state.editorReducer);

  const onChange = useCallback(
    (value: string) => {
      setHeaders(value);
    },
    [setHeaders]
  );

  const prettifyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'KeyF' && e.getModifierState('Shift') && e.getModifierState('Alt')) {
      setHeaders(jsonbeautify(JSON.parse(headers), null!, 1, 5));
    }
  };

  return (
    <Codemirror
      style={{ overflow: 'hidden', height: '70%' }}
      height="100%"
      theme={'none'}
      value={headers}
      onChange={onChange}
      onKeyDown={prettifyHandler}
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
