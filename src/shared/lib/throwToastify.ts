import { toast } from 'react-toastify';

type ThrowToastify = (message: string, toastType: 'error' | 'warning', theme: 'light' | 'dark') => void;

export const throwToastify: ThrowToastify = (message, toastType, theme) => {
  toast[toastType](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme
  });
};
