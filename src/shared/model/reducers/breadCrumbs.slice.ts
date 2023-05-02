import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBreadCrumbs {
  breadCrumbs: string[];
  currentTypeName: string;
}

const initialState: IBreadCrumbs = {
  breadCrumbs: [],
  currentTypeName: ''
};

export const breadCrumbsSlice = createSlice({
  name: 'breadCrumbs',
  initialState,
  reducers: {
    setBreadCrumbs(state, action: PayloadAction<string>) {
      if (state.currentTypeName === action.payload) {
        return;
      }

      const prevTypeIndex = state.breadCrumbs.findIndex((type) => type === action.payload);

      if (prevTypeIndex) {
        state.breadCrumbs = state.breadCrumbs.slice(0, prevTypeIndex + 1);
      } else {
        state.breadCrumbs.push(action.payload);
      }

      state.currentTypeName = action.payload;
    },

    setStepBack(state) {
      const prevType = state.breadCrumbs.at(-2);

      if (prevType) {
        state.currentTypeName = prevType;
        state.breadCrumbs.pop();
      }
    }
  }
});

export const breadCrumbsActions = breadCrumbsSlice.actions;

export const breadCrumbsReducer = breadCrumbsSlice.reducer;
