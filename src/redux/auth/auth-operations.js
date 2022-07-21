import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/authAPI';

export const register = createAsyncThunk(
  'auth/register',
  async (credential, { rejectWithValue }) => {
    try {
      const user = await API.registerUser(credential);
      return user;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
