import { Outlet } from 'react-router-dom';
import { Summary } from '../../modules/Summary/Summary';
import s from './ReportPage.module.css';
import { ButtonGoMain } from 'modules/Buttons/ButtonGoMain';
import Balance from '../../modules/balance/components/Balance/Balance';
import { CurrentPeriod } from '../../modules/CurrentPeriod/CurrentPeriod.jsx';
import { useState } from 'react';
import Container from 'modules/navigation/components/Container';

const arrayOfMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function ReportPage() {
  const date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = arrayOfMonth[date.getMonth()];
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const onPreviousMonth = () => {
    if (arrayOfMonth.indexOf(month) < 1) {
      setYear(year - 1);
    }
    if (
      arrayOfMonth.indexOf(month) === -1 ||
      arrayOfMonth.indexOf(month) === 0
    ) {
      return setMonth(arrayOfMonth[11]);
    }
    setMonth(prevState => arrayOfMonth[arrayOfMonth.indexOf(prevState) - 1]);
  };

  const onNextMonth = () => {
    if (month === 'December') {
      setYear(year + 1);
    }
    if (arrayOfMonth.indexOf(month) > 10) {
      return setMonth(arrayOfMonth[0]);
    }
    setMonth(arrayOfMonth[arrayOfMonth.indexOf(month) + 1]);
  };

  return (
    <>
      <Container>
        <section className={s.section}>
          <div className={s.inlineBlock}>
            <ButtonGoMain />
            <div className={s.inlineBalanceBlock}>
              <CurrentPeriod
                onPreviousMonth={onPreviousMonth}
                onNextMonth={onNextMonth}
                month={month}
                year={year}
              />
              <Balance type="report" />
            </div>
          </div>
          <Summary />

          <Outlet />
        </section>
      </Container>
    </>
  );
}
