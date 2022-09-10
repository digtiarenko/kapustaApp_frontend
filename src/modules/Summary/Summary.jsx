import s from '../Summary/summary.module.css';
import reportsOperations from 'redux/reports/reportsOperations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTotalSunByMonthlyExpenses,
  getTotalSunByMonthlyIncome,
} from 'redux/reports/reportsSelectors';
export const Summary = ({ year, month }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      reportsOperations.getReportsMonthlyExpenses({
        year,
        month,
      })
    );

    dispatch(
      reportsOperations.getReportsMonthlyIncome({
        year,
        month,
      })
    );
  }, [dispatch, month, year]);

  const monthlyExpenses = useSelector(getTotalSunByMonthlyExpenses);
  const monthlyIncome = useSelector(getTotalSunByMonthlyIncome);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {monthlyExpenses ? (
          <li className={s.listItem}>
            Expenses:
            {<div className={s.expenses}>- {monthlyExpenses} грн.</div>}
          </li>
        ) : (
          <li className={s.listItem}>
            {<div className={s.expenses}> No expenses yet</div>}
          </li>
        )}
        {monthlyIncome ? (
          <li className={s.listItem}>
            Income:
            {<div className={s.income}> {monthlyIncome} грн.</div>}
          </li>
        ) : (
          <li className={s.listItem}>
            {<div className={s.income}> No income yet</div>}
          </li>
        )}
      </ul>
    </div>
  );
};
