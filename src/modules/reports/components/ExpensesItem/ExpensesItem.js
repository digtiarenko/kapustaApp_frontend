import { Link } from 'react-router-dom';
import s from './ExpensesItem.module.css';

export default function ExpensesItem({ category, sum, children }) {
  return (
    <Link to={`/reports/expenses/${category.toLowerCase()}`} className={s.link}>
      <p>{sum}</p>
      {children}
      <p>{category.toLowerCase()}</p>
    </Link>
  );
}
