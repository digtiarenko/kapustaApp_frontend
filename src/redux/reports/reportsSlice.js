import { createSlice } from '@reduxjs/toolkit';
import reportsOperations from './reportsOperations';

const initialState = {
  date: {
    year: null,
    month: null,
  },
  full: null,
  monthExpenses: null,
  monthIncome: null,
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    setReportsDate(state, { payload }) {
      state.date.year = payload.year;
      state.date.month = payload.month;
    },
  },
  extraReducers: {
    [reportsOperations.getReportsFull.fulfilled](state, { payload }) {
      state.full = payload.fullReportByMonth;
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
export const { setReportsDate } = reportsSlice.actions;
