import s from './ExpensesList.module.css';
import ExpensesItem from '../ExpensesItem';
import icons from '../../../../images/icons/expenses/categoryIcons';

export default function ExpensesList() {
  return (
    <ul className={s.list}>
      {icons.map((icon, idx, arr) => (
        <div className={s.item}>
          <ExpensesItem key={idx} category="alcohol" sum="200">
            <img src={icon} alt="icon" className={s.icon} />
          </ExpensesItem>
        </div>
      ))}
    </ul>
  );
}
