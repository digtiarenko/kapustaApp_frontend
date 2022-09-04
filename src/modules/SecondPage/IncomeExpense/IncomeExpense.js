import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './IncomeExpense.module.css';
const setActive = ({ isActive }) => {
  return {
    color: isActive ? '#FF751D' : '#000000',
  };
};
function IncomeExpense() {
  return (
    <nav className={s.nav}>
      <button className={s.button}>
        <NavLink to="/home/expenses" className={s.link} style={setActive}>
          Expenses
        </NavLink>
      </button>

      <button className={s.button}>
        <NavLink to="/home/income" className={s.link} style={setActive}>
          Income
        </NavLink>
      </button>
    </nav>
  );
}

export default IncomeExpense;
