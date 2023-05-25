import { Dispatch, SetStateAction, createContext } from 'react';

type DrawerContext = {
  setIsResponseOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = createContext({} as DrawerContext);
