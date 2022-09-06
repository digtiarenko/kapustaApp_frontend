import s from './Expenses.module.css';

import SliderIncomeExpenses from '../../../../modules/reports/components/SliderIncomeExpenses';
import ExpensesList from '../../../../modules/reports/ExpensesList';

import { Outlet } from 'react-router-dom';

export default function Expenses() {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.wrap}>
          <SliderIncomeExpenses text="expenses" link="income" />
          <ExpensesList />
        </div>
      </div>
      <Outlet />
    </>
  );
}
