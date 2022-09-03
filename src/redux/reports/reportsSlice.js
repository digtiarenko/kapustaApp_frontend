import { createSlice } from '@reduxjs/toolkit';
import reportsOperations from './reportsOperations';

const initialState = {
  full: null,
  monthExpense: null,
  monthIncome: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    [reportsOperations.getReportsFull.fulfilled](state, { payload }) {
      state.full = payload;
    },
    [reportsOperations.getReportsMonthlyExpense.fulfilled](state, { payload }) {
      state.monthExpense = payload;
    },
    [reportsOperations.getReportsMonthlyIncome.fulfilled](state, { payload }) {
      state.monthIncome = payload;
    },
  },
});

export default reportsSlice.reducer;
