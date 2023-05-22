import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserInitial {
  isLoggedIn: boolean | null;
}

const initialState: UserInitial = {
  isLoggedIn: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    }
  }
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
