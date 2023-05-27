import { Dispatch, MutableRefObject, SetStateAction, createContext } from 'react';

type PlaygroundContext = {
  playgroundTools: MutableRefObject<HTMLButtonElement | null>;
  isDocumentOpen: boolean;
  isResponseOpen: boolean;
  responseStatus: number;
  setResponseStatus: Dispatch<SetStateAction<number>>;
  setIsDocumentOpen: Dispatch<SetStateAction<boolean>>;
  setIsResponseOpen: Dispatch<SetStateAction<boolean>>;
};

export const PlaygroundContext = createContext({} as PlaygroundContext);
