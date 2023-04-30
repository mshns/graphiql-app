import { createSlice } from '@reduxjs/toolkit';

interface IIntrospection {
  data: {};
}

const initialState: IIntrospection = {
  data: {}
};

export const introspectionSlice = createSlice({
  name: 'introspection',
  initialState,
  reducers: {}
});

export const introspectionActions = introspectionSlice.actions;

export const introspectionReducer = introspectionSlice.reducer;
