import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBreadCrumbs {
  breadCrumbs: string[];
  currentType: string;
}

const initialState: IBreadCrumbs = {
  breadCrumbs: [],
  currentType: ''
};

export const breadCrumbsSlice = createSlice({
  name: 'breadCrumbs',
  initialState,
  reducers: {
    setBreadCrumbs(state, action: PayloadAction<string>) {
      if (state.currentType === action.payload) {
        return;
      }

      const prevTypeIndex = state.breadCrumbs.findIndex((type) => type === action.payload);

      if (prevTypeIndex) {
        state.breadCrumbs = state.breadCrumbs.slice(0, prevTypeIndex + 1);
      } else {
        state.breadCrumbs.push(action.payload);
      }

      state.currentType = action.payload;
    }
  }
});

export const breadCrumbsActions = breadCrumbsSlice.actions;

export const breadCrumbsReducer = breadCrumbsSlice.reducer;
