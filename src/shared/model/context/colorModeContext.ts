import { createContext } from 'react';
import { PaletteMode } from '@mui/material';

type IColorModeContext = {
  toggleColorMode: () => void;
  mode: PaletteMode;
};

export const ColorModeContext = createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: 'light'
});
