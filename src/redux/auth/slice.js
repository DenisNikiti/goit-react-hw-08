import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isloading: false,
    isError: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.isloading = true;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isloading = false;
        state.token = action.payload.token;
        state.user = action.user;
      })
      .addCase(register.rejected, (state) => {
        state.isloading = false;
        state.isError = true;
      })
      .addCase(login.pending, (state) => {
        state.isloading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isloading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state) => {
        state.isloading = false;
        state.isError = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logout.pending, (state) => {
        state.isloading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isloading = false;
        state.isLoggedIn = false;
        state.user = { name: null, email: null };
        state.token = null;
      })
      .addCase(logout.rejected, (state) => {
        state.isloading = false;
      }),
});

export default authSlice.reducer;
