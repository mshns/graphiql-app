import { FC, useCallback, useRef } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import Codemirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { linter } from '@codemirror/lint';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { useAppActions, useAppSelector, EXTENTIONS } from 'shared';

export const QueryVariables: FC = () => {
  const codemirror = useRef<ReactCodeMirrorRef | null>(null);
  const { setVariables } = useAppActions();
  const { variables } = useAppSelector((state) => state.editorReducer);

  const onChange = useCallback(
    (value: string) => {
      setVariables(value);
    },
    [setVariables]
  );

  const prettifyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'KeyF' && e.getModifierState('Shift') && e.getModifierState('Alt')) {
      setVariables(jsonbeautify(JSON.parse(variables), null!, 1, 5));
    }
  };

  return (
    <Codemirror
      ref={codemirror}
      style={{ overflow: 'hidden', maxHeight: '100%', flex: '1 1 auto' }}
      max-height="100%"
      theme={'none'}
      value={variables}
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
