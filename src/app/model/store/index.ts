import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';

import * as appReducers from 'shared/model/reducers';

const { introspectionReducer } = appReducers;

const rootReducer = combineReducers({
  introspectionReducer
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
