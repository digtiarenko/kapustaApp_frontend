import { Link } from 'react-router-dom';
import s from './ExpensesItem.module.css';

export default function ExpensesItem({ category, children }) {
  return (
    <Link to={`/reports/expenses/${category}`} className={s.link}>
      {children}
    </Link>
  );
}
