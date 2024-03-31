export const isUserLoggedIn = (state) => state.auth.isLoggedIn;
export const isloading = (state) => state.auth.isloading;

export const error = (state) => state.auth.isError;

export const User = (state) => state.auth.user.name;

export const Refreshing = (state) => state.auth.isRefreshing;
