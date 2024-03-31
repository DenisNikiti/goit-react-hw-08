import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export const register = createAsyncThunk(
  "auth/register",
  async (user, thinkAPI) => {
    try {
      const response = await axios.post("/users/signup", user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thinkAPI) => {
  try {
    const response = await axios.post("/users/login", user);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thinkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thinkAPI) => {
  try {
    const response = await axios.post("users/logout");
    return response.data;
  } catch (error) {
    thinkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refreshUser",
  async (_, thinkAPI) => {
    const Reduxstate = thinkAPI.getState();
    const SavedToken = Reduxstate.auth.token;

    setAuthHeader(SavedToken);
    try {
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      return thinkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      const savedToken = state.auth.token;

      return savedToken !== null;
    },
  }
);
