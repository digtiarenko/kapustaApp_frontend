import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getReportsFull = createAsyncThunk('reports/getFull', async () => {
  try {
    const { data } = await axios.get('/reports');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const getReportsMonthlyExpenses = createAsyncThunk(
  'reports/getMonthlyExpenses',
  async () => {
    try {
      const { data } = await axios.get('/reports/monthly-expenses');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const getReportsMonthlyIncome = createAsyncThunk(
  'reports/getMonthlyIncome',
  async () => {
    try {
      const { data } = await axios.get('/reports/monthly-income');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const reportsOperations = {
  getReportsFull,
  getReportsMonthlyExpenses,
  getReportsMonthlyIncome,
};

export default reportsOperations;
