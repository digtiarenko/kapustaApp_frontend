import s from './Expenses.module.css';
import SliderIncomeExpenses from '../../../modules/reports/components/SliderIncomeExpenses';
import ExpensesList from '../../../modules/reports/components/ExpensesList';

export default function Expenses() {
  return (
    <div className={s.wrapper}>
      <SliderIncomeExpenses text="expenses" />
      <ExpensesList />
    </div>
  );
}
