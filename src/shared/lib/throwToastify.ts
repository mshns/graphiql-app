import { toast } from 'react-toastify';

export const throwToastify = (message: string, toastType: 'error' | 'warning') => {
  toast[toastType](message, {
    position: 'top-right',
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  });
};
