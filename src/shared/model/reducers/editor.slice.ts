import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IRequestObject {
  query: string;
  variables?: { [key: string]: string };
}

export interface IEditor {
  query: string;
  variables: string;
  variablesKeymap: string[];
  requestObject: IRequestObject | null;
}

const initialState: IEditor = {
  query: `query {
  allFilms {
    films {
      director
      created
    }
  }
}`,
  variables: '',
  variablesKeymap: [],
  requestObject: null
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

    setRequestObject(state, action: PayloadAction<IRequestObject>) {
      state.requestObject = action.payload;
    }
  }
});

export const editorActions = editorSlice.actions;

export const editorReducer = editorSlice.reducer;
