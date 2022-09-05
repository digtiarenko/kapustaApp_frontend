import { createSlice } from '@reduxjs/toolkit';
import reportsOperations from './reportsOperations';

const initialState = {
  full: null,
  monthExpenses: null,
  monthIncome: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: {
    [reportsOperations.getReportsFull.fulfilled](state, { payload }) {
      state.full = payload;
    },
    [reportsOperations.getReportsMonthlyExpenses.fulfilled](
      state,
      { payload }
    ) {
      state.monthExpenses = payload.expensesByMonth;
    },
    [reportsOperations.getReportsMonthlyIncome.fulfilled](state, { payload }) {
      state.monthIncome = payload.incomeByMonth;
    },
  },
});

export default reportsSlice.reducer;
