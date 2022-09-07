import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import s from './IncomeExpense.module.css';
const setActive = ({ isActive }) => {
  return {
    color: isActive ? '#FF751D' : '#000000',
  };
};
function IncomeExpense() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <nav className={s.nav}>
      <button className={s.button_first}>
        {isMobile ? (
          <NavLink to="/add_expenses" className={s.link} style={setActive}>
            Expenses
          </NavLink>
        ) : (
          <NavLink to="/home/expenses" className={s.link} style={setActive}>
            Expenses
          </NavLink>
        )}
      </button>

      <button className={s.button}>
        {isMobile ? (
          <NavLink to="/add_income" className={s.link} style={setActive}>
            Income
          </NavLink>
        ) : (
          <NavLink to="/home/income" className={s.link} style={setActive}>
            Income
          </NavLink>
        )}
      </button>
    </nav>
  );
}

export default IncomeExpense;
