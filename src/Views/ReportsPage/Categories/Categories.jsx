import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import s from './Categories.module.css';
import ReportsSlider from 'modules/reports/components/ReportsSlider';
import ReportsList from 'modules/reports/components/ReportsList';
import { Outlet } from 'react-router-dom';

import { getDataByMonth } from 'redux/reports/reportsSelectors';

export default function Expenses() {
  const [expenses, setExpenses] = useState(null);
  const [header, setHeader] = useState('expenses');
  const reportFullMonth = useSelector(getDataByMonth);

  useEffect(() => {
    reportFullMonth[0] && reportFullMonth[0].date
      ? setExpenses(
          reportFullMonth[0].arrOfTypes.filter(item => item.type === header)[0]
            .arrOfCategories
        )
      : setExpenses(null);
  }, [header, reportFullMonth, expenses]);

  function switchPage(header) {
    if (header === 'expenses') {
      setHeader('income');
    }
    if (header === 'income') {
      setHeader('expenses');
    }
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.wrap}>
          <ReportsSlider switchPage={switchPage} header={header} />
          <ReportsList expenses={expenses} header={header} />
        </div>
      </div>
      <Outlet />
    </>
  );
}
