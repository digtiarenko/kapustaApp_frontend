import { Link } from 'react-router-dom';
import s from './ReportsItem.module.css';

export default function ReportsItem({ id, category, sum, children }) {
  return (
    <Link to={`/reports/${id}`} className={s.link}>
      <p className={`${s.sum} ${s.text}`}>{sum}</p>
      {children}
      <p className={`${s.category} ${s.text}`}>{category.toLowerCase()}</p>
    </Link>
  );
}
