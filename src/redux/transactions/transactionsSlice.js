import { createSlice } from '@reduxjs/toolkit';
import {
  createUserTransaction,
  getTransactionsByTypeAndDate,
  deleteTransactionById,
} from './transactionsOperations';

const initialState = {
  message: null,
  transactions: null,
  id: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [createUserTransaction.fulfilled](state, { payload }) {
      state.message = payload.message;
      state.transactions = payload.transaction;
    },
    [createUserTransaction.rejected](state, { payload }) {
      state.message = 'Transaction with such data is incorrect';
    },
    [getTransactionsByTypeAndDate.fulfilled](state, { payload }) {
      console.log('getTransactionsByTypeAndDate', payload);
      state.message = payload.message;
      state.transactions = payload.transactions;
      console.log('state.transaction', state.transactions);
    },
    [getTransactionsByTypeAndDate.rejected](state, { payload }) {
      state.message = 'Incorrect date or transaction type specified';
    },
    [deleteTransactionById.fulfilled](state, action) {
      state.transactions.filter(
        ({ _id }) => _id !== action.payload.transaction._id
      );
    },
  },
});

export default transactionsSlice.reducer;
