import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/authAPI';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await API.registerUser(credentials);

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await API.logInUser(credentials);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return API.logOutUser();
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    API.token.set(persistedToken);
    try {
      return API.fetchCurrent();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
