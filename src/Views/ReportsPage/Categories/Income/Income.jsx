import s from './Income.module.css';

import SliderIncomeExpenses from '../../../../modules/reports/components/SliderIncomeExpenses';
import IncomeList from '../../../../modules/reports/components/IncomeList';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function Income() {
  const { year, month } = useOutletContext();
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.wrap}>
          <SliderIncomeExpenses text="income" link="expenses" />
          <IncomeList />
        </div>
      </div>
      <Outlet context={{ year: year, month: month }} />
    </>
  );
}
