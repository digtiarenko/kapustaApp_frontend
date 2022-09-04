import { createSlice } from '@reduxjs/toolkit';
import {
  createUserTransaction,
  getTransactionsByTypeAndDate,
} from './transactionsOperations';

const initialState = {
  message: null,
  transaction: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [createUserTransaction.fulfilled](state, { payload }) {
      console.log('transactions PAYLOAD', payload);
      state.message = payload.message;
      state.transaction = payload.transaction;
    },
    [getTransactionsByTypeAndDate.fulfilled](state, { payload }) {
      console.log('PAYLOAD', payload);
    },
  },
});

export default transactionsSlice.reducer;
