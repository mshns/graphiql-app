import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserInitial {
  isLoggedIn: boolean | null;
  isEmailError: boolean;
  isPasswordError: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  emailValue: string;
  passwordValue: string;
}

const initialState: UserInitial = {
  isLoggedIn: null,
  isEmailError: false,
  isPasswordError: false,
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
    setIsEmailError(state, { payload }: PayloadAction<boolean>) {
      state.isEmailError = payload;
    },
    setIsPasswordError(state, { payload }: PayloadAction<boolean>) {
      state.isPasswordError = payload;
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
