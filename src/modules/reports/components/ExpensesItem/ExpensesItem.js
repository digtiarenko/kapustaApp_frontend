import { Link } from 'react-router-dom';
import s from './ExpensesItem.module.css';

export default function ExpensesItem({ category, sum, children }) {
  return (
    <Link to={`/reports/expenses/${category.toLowerCase()}`} className={s.link}>
      <p className={`${s.sum} ${s.text}`}>{sum}</p>
      {children}
      <p className={`${s.category} ${s.text}`}>{category.toLowerCase()}</p>
    </Link>
  );
}
