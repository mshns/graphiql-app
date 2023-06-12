import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/esm/types';
import { preloadRequest } from 'shared/lib';

export interface IRequestObject {
  query: string;
  variables?: { [key: string]: string | number };
  headers?: GraphQLClientRequestHeaders;
}

export interface IEditor {
  query: string;
  variables: string;
  headers: string;
  variablesKeymap: string[];
  requestObject: IRequestObject | null;
  response: unknown;
}

const requestObj = preloadRequest();

const initialState: IEditor = {
  query: requestObj.query,
  variables: requestObj.variables,
  headers: requestObj.headers,
  variablesKeymap: [],
  requestObject: null,
  response: null
};

export const editorSlice = createSlice({
  name: 'Editor',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },

    setVariables(state, action: PayloadAction<string>) {
      state.variables = action.payload;
    },

    setHeaders(state, action: PayloadAction<string>) {
      state.headers = action.payload;
    },

    setRequestObject(state, action: PayloadAction<IRequestObject | null>) {
      state.requestObject = action.payload;
    },

    setResponse(state, action: PayloadAction<unknown>) {
      state.response = action.payload;
    }
  }
});

export const editorActions = editorSlice.actions;

export const editorReducer = editorSlice.reducer;
