import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App, initI18n, initFirebase } from 'app';

initI18n();
initFirebase();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
