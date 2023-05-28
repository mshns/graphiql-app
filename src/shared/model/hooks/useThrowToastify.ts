import { useTheme } from '@mui/material';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

type ThrowToastify = (message: string, toastType: 'error' | 'warning') => void;

export const useThrowToastify = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const throwToastify = useCallback<ThrowToastify>(
    (message, toastType) => {
      toast[toastType](message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode
      });
    },
    [mode]
  );

  return { throwToastify };
};
