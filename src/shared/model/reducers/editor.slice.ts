import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IEditor {
  query: string;
  variables: string;
}

const initialState: IEditor = {
  query: '',
  variables: ''
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
    }
  }
});

export const editorActions = editorSlice.actions;

export const editorReducer = editorSlice.reducer;
