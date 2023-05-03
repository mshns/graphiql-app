import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { documentReducer } from 'shared';

const rootReducer = combineReducers({
  documentReducer
});

export const setupStore = (preloadedState?: PreloadedState<TRootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = TAppStore['dispatch'];
