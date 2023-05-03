import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IBreadCrumbs {
  breadCrumbs: string[];
  currentTypeName: string;
  parentTypeName: string;
  isDocumentOpen: boolean;
}

const initialState: IBreadCrumbs = {
  breadCrumbs: ['Schema'],
  currentTypeName: 'Schema',
  parentTypeName: '',
  isDocumentOpen: false
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

      if (prevTypeIndex > 0) {
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
    },

    setIsDocumentOpen(state) {
      state.isDocumentOpen = !state.isDocumentOpen;
    }
  }
});

export const documentActions = documentSlice.actions;

export const documentReducer = documentSlice.reducer;
