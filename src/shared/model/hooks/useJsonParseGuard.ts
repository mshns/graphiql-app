import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import { TOAST_TYPES } from '../../constants';
import { useThrowToastify } from './useThrowToastify';

type JsonParseGuard = (
  state: string,
  action: ActionCreatorWithPayload<string, 'Editor/setVariables' | 'Editor/setHeaders'>,
  message: string
) => boolean;

export const useJsonParseGuard = () => {
  const { throwToastify } = useThrowToastify();

  const jsonParseGuard = useCallback<JsonParseGuard>(
    (state, action, message) => {
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
    },
    [throwToastify]
  );

  return { jsonParseGuard };
};
