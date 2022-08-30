import s from './Income.module.css';
import SliderIncomeExpenses from '../../../modules/reports/components/SliderIncomeExpenses';
import ExpensesList from '../../../modules/reports/components/ExpensesList';

export default function Income() {
  return (
    <div className={s.wrapper}>
      <SliderIncomeExpenses text="income" link="expenses" />
      <ExpensesList />
    </div>
  );
}
