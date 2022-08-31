import s from './Income.module.css';
import SliderIncomeExpenses from '../../../modules/reports/components/SliderIncomeExpenses';
import IncomeList from '../../../modules/reports/components/IncomeList';

export default function Income() {
  return (
    <div className={s.wrapper}>
      <SliderIncomeExpenses text="income" link="expenses" />
      <IncomeList />
    </div>
  );
}
