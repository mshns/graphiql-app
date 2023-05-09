import { FC, useEffect, useState } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import { request } from 'graphql-request';
import Codemirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { useAppSelector } from 'shared';
import { EXTENTIONS } from 'shared/api';

const ResponseBar: FC = () => {
  const [response, setResponse] = useState<unknown>();
  const { requestObject } = useAppSelector((state) => state.editorReducer);

  useEffect(() => {
    if (requestObject) {
      (async () => {
        try {
          const data = await request<unknown>(import.meta.env.VITE_GRAPH_API, requestObject.query);

          setResponse(data);
        } catch (error) {
          // if (error instanceof Error) {
          //   console.log(error.message);
          // }
        }
      })();
    }
  }, [requestObject]);

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

export default ResponseBar;
