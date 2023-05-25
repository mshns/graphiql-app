import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { default as jsonbeautify } from 'json-beautify';
import { throwToastify, TOAST_TYPES } from 'shared';

export const jsonParseGuard = (
  state: string,
  action: ActionCreatorWithPayload<string, 'Editor/setVariables' | 'Editor/setHeaders'>,
  message: string
) => {
  if (!state) {
    return true;
  }

  try {
    action(jsonbeautify(JSON.parse(state), null!, 1, 80));

    return true;
  } catch (error) {
    throwToastify(message, TOAST_TYPES.error);

    return false;
  }
};
