import { FC } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import Codemirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { useAppSelector } from 'shared';
import { EXTENTIONS } from 'shared/api';
import { useGetResponse } from '../model';

export const ResponseBar: FC = () => {
  const { requestObject } = useAppSelector((state) => state.editorReducer);
  const { response } = useGetResponse(requestObject);

  return (
    <Codemirror
      style={{ height: '100%' }}
      theme={'none'}
      value={jsonbeautify(response, null!, 1.5, 100)}
      basicSetup={{ highlightActiveLine: false, highlightActiveLineGutter: false }}
      extensions={[...EXTENTIONS, json(), EditorView.editable.of(false), EditorState.readOnly.of(true)]}
    />
  );
};
