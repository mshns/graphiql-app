import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { default as jsonbeautify } from 'json-beautify';
import { TOAST_MESSAGES, throwToastify, TOAST_TYPES } from 'shared';

export const jsonParseGuard = (
  state: string,
  action: ActionCreatorWithPayload<string, 'Editor/setVariables' | 'Editor/setHeaders'>,
  name: 'variables' | 'headers'
) => {
  if (!state) {
    return;
  }

  try {
    action(jsonbeautify(JSON.parse(state), null!, 1, 5));
  } catch (error) {
    throwToastify(TOAST_MESSAGES[`${name}Parse`], TOAST_TYPES.error);
  }
};
