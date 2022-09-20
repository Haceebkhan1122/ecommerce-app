import { createSlice } from '@reduxjs/toolkit'

const initialState = {
isLoading: false,
isAuth: false,
error: "",
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
      loginPending:(state, action)=>{
        state.isLoading = true
      },
       loginSuccess: (state, action) => {
        state.isLoading = true;
        state.isAuth = true;
        state.error = ""
      },
      loginFailed: (state, action, {payload}) => {
        state.isLoading = false;
          state.error = payload;
      }
  }
});

export const { loginPending, loginSuccess, loginFailed} = loginSlice.actions

export default loginSlice.reducer