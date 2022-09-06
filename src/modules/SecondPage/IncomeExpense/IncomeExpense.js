import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './IncomeExpense.module.css';

function IncomeExpense() {
  return (
    <nav className={s.nav}>
      <button className={s.button}>
        <NavLink to="/home/expenses" className={s.link}>
          Expenses
        </NavLink>
      </button>

      <button className={s.button}>
        <NavLink to="/home/income" className={s.link}>
          Income
        </NavLink>
      </button>
    </nav>
  );
}

export default IncomeExpense;
