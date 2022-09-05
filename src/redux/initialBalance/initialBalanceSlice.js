import { createSlice } from '@reduxjs/toolkit';
import balanceOperations from './initialBalanceOperations';

const initialState = {
  balance: null,
};

const initialBalanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [balanceOperations.fetchBalance.fulfilled](state, action) {
      state.balance = action.payload.user.balance;
    },
    [balanceOperations.addInitialBalance.fulfilled](state, action) {
      console.log(action.payload);
      state.balance = action.payload.balance;
    },
  },
});

export default initialBalanceSlice.reducer;
