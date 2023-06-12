import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { type TAppDispatch, type TRootState } from 'app';
import { documentActions, editorActions, userActions } from '../reducers';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const actions = {
  ...documentActions,
  ...editorActions,
  ...userActions
};

const useAppActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};

export { useAppSelector, useAppActions };
