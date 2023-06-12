import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IDocument {
  breadCrumbs: string[];
  currentTypeName: string;
  parentTypeName: string;
}

const initialState: IDocument = {
  breadCrumbs: ['Schema'],
  currentTypeName: 'Schema',
  parentTypeName: ''
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setBreadCrumbs(state, action: PayloadAction<string>) {
      if (state.currentTypeName === action.payload) {
        return;
      }

      const prevTypeIndex = state.breadCrumbs.findIndex((type) => type === action.payload);

      if (prevTypeIndex !== -1) {
        state.breadCrumbs = state.breadCrumbs.slice(0, prevTypeIndex + 1);
      } else {
        state.breadCrumbs.push(action.payload);
      }

      state.currentTypeName = action.payload;
      state.parentTypeName = state.breadCrumbs.at(-2) || '';
    },

    setStepBack(state) {
      const prevType = state.breadCrumbs.at(-2);

      if (prevType) {
        state.currentTypeName = prevType;
        state.breadCrumbs.pop();
        state.parentTypeName = state.breadCrumbs.at(-2) || '';
      }
    }
  }
});

export const documentActions = documentSlice.actions;

export const documentReducer = documentSlice.reducer;
