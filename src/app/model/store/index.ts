import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { documentReducer, editorReducer, userReducer } from 'shared';

const rootReducer = combineReducers({
  documentReducer,
  editorReducer,
  userReducer
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
