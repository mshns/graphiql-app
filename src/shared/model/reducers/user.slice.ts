import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserInitial {
  isLoggedIn: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  emailValue: string;
  passwordValue: string;
}

const initialState: UserInitial = {
  isLoggedIn: false,
  emailErrorMessage: '',
  passwordErrorMessage: '',
  emailValue: '',
  passwordValue: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn(state, { payload }: PayloadAction<boolean>) {
      state.isLoggedIn = payload;
    },
    setEmailErrorMessage(state, { payload }: PayloadAction<string>) {
      state.emailErrorMessage = payload;
    },
    setPasswordErrorMessage(state, { payload }: PayloadAction<string>) {
      state.passwordErrorMessage = payload;
    },
    setEmailValue(state, { payload }: PayloadAction<string>) {
      state.emailValue = payload;
    },
    setPasswordValue(state, { payload }: PayloadAction<string>) {
      state.passwordValue = payload;
    }
  }
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
