import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const createUserTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transactionBody, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.post('/transactions', transactionBody);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getTransactionsByTypeAndDate = createAsyncThunk(
  'transactions/getTransactions',
  async ({ type, date, page, limit }, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await axios.get(
        `/transactions/${type}/${date}?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const transactionsOperations = {
  createUserTransaction,
  getTransactionsByTypeAndDate,
};

export default transactionsOperations;
