import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { type TAppDispatch, type TRootState } from '../store';
import * as appReducers from '../store/reducers';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const actions = {
  ...appReducers.introspectionActions
};

const useAppActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};

export { useAppDispatch, useAppSelector, useAppActions };
