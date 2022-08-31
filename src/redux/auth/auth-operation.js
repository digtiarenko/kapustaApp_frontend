import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = `http://localhost:5000/api`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/register', credentials);
      token.set(data.token);
      alert('Welcome!');
      return data;
    } catch (error) {
      if (error.response.data.name === 'MongoError') {
        return thunkAPI.rejectWithValue('isRegisterPasswordAlertShown');
      }
      // alert.error("Registration error, please try again");
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/login', credentials);
      console.log('login=======data', data);
      token.set(data.token);
      alert('Welcome!');
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('isLogInAlertShown');
      // alert("Incorrect password or login, try again");
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    axios.post('auth/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      alert(error.message);
    }
  }
);
