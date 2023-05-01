import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { type TAppDispatch, type TRootState } from 'app/model/store/index';
import { breadCrumbsActions } from '../reducers';

const useAppDispatch = () => useDispatch<TAppDispatch>();
const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

const actions = {
  ...breadCrumbsActions
};

const useAppActions = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(actions, dispatch);
};

export { useAppDispatch, useAppSelector, useAppActions };
