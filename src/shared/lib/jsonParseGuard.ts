import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { default as jsonbeautify } from 'json-beautify';
import { throwToastify, TOAST_TYPES } from 'shared';

type JsonParseGuard = (
  state: string,
  action: ActionCreatorWithPayload<string, 'Editor/setVariables' | 'Editor/setHeaders'>,
  message: string,
  theme: 'light' | 'dark'
) => boolean;

export const jsonParseGuard: JsonParseGuard = (state, action, message, theme) => {
  if (!state) {
    return true;
  }

  try {
    action(jsonbeautify(JSON.parse(state), null!, 1, 80));

    return true;
  } catch (error) {
    throwToastify(message, TOAST_TYPES.error, theme);

    return false;
  }
};
