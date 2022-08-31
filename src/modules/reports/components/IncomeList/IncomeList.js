import s from './IncomeList.module.css';
import ExpensesItem from '../ExpensesItem';
import icons from '../../../../images/icons/income/icons';

export default function IncomeList() {
  return (
    <ul className={s.list}>
      {icons.map((icon, idx, arr) => (
        <ExpensesItem key={idx} category="income" sum="40000">
          <img src={icon} alt="icon" className={s.icon} />
        </ExpensesItem>
      ))}
    </ul>
  );
}
