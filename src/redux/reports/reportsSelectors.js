import { createSelector } from '@reduxjs/toolkit';

export const getReportsFull = state => state.reports.full;
export const getReportsMonthlyExpenses = state => state.reports.monthExpenses;
export const getReportsMonthlyIncome = state => state.reports.monthIncome;
export const getReportsDate = state => state.reports.date;

export const getDataByMonth = createSelector(
  [getReportsFull, getReportsDate],
  (data, date) => {
    const searchDate =
      date.year + '-' + date.month < 10
        ? '0' + Number(date.month)
        : Number(date.month);

    return data.filter(item => item.date.includes(searchDate));
  }
);

export const getDataByType = type =>
  createSelector([getDataByMonth], dataByMonth => {
    return dataByMonth.arrOfTypes.filter(item => item.type.includes(type));
  });

export const getDataByCategory = (type, category) =>
  createSelector([getDataByType(type)], dataByType => {
    return dataByType[0].arrOfCategories.filter(item =>
      item.category.name.toLowerCase().includes(category)
    )[0];
  });
