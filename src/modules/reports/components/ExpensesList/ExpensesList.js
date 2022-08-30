import s from './ExpensesList.module.css';
import ExpensesItem from '../ExpensesItem';
import icons from '../../../../images/icons/category/categoryIcons';

export default function ExpensesList() {
  return (
    <ul>
      {icons.map((icon, idx, arr) => (
        <ExpensesItem key={idx} category="alcohol" sum="200">
          {icon}
        </ExpensesItem>
      ))}
    </ul>
  );
}
