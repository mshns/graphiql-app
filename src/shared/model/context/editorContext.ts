import { createContext, Dispatch, MutableRefObject, SetStateAction } from 'react';

import { ReactCodeMirrorRef } from '@uiw/react-codemirror';

type EditorContext = {
  queryRef: MutableRefObject<ReactCodeMirrorRef | null>;
  headersRef: MutableRefObject<ReactCodeMirrorRef | null>;
  variablesRef: MutableRefObject<ReactCodeMirrorRef | null>;
  isOpenConfig: boolean;
  setIsOpenConfig: Dispatch<SetStateAction<boolean>>;
};

export const EditorContext = createContext({} as EditorContext);
