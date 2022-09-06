import s from './Expenses.module.css';

import SliderIncomeExpenses from '../../../../modules/reports/components/SliderIncomeExpenses';
import ExpensesList from '../../../../modules/reports/components/ExpensesList';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function Expenses() {
  const { year, month } = useOutletContext();
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.wrap}>
          <SliderIncomeExpenses text="expenses" link="income" />
          <ExpensesList />
        </div>
      </div>
      <Outlet context={{ year: year, month: month }} />
    </>
  );
}
