import { Outlet, useNavigate } from 'react-router-dom';
import { Summary } from '../../modules/Summary/Summary';
import s from './ReportPage.module.css';
import { ButtonGoMain } from 'modules/Buttons/ButtonGoMain';
import Balance from 'modules/balance/components/Balance';
import Categories from './Categories';
import { CurrentPeriod } from '../../modules/CurrentPeriod/CurrentPeriod.jsx';
import { useEffect, useState } from 'react';
import Container from 'modules/navigation/components/Container';
import { useDispatch } from 'react-redux';
import reportsOperations from 'redux/reports/reportsOperations';
import { setReportsDate } from 'redux/reports/reportsSlice';

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
const QUERY_PARAMS = {}; //{year:2022, month:9, limit: 10 };
const SetQueryParams = (year, month, limit) => {
  if (year) QUERY_PARAMS.year = year;
  if (month) QUERY_PARAMS.month = month;
  if (limit) QUERY_PARAMS.limit = limit;
};
export default function ReportPage() {
  const date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = arrayOfMonth[date.getMonth()];
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onPreviousMonth = () => {
    navigate('/reports');
    if (arrayOfMonth.indexOf(month) < 1) {
      setYear(year - 1);
    }
    if (
      arrayOfMonth.indexOf(month) === -1 ||
      arrayOfMonth.indexOf(month) === 0
    ) {
      dispatch(
        setReportsDate({ year, month: arrayOfMonth.indexOf(month) + 12 })
      );

      SetQueryParams(year, arrayOfMonth.indexOf(month) + 12);
      dispatch(reportsOperations.getReportsFull(QUERY_PARAMS));
      return setMonth(arrayOfMonth[11]);
    }
    dispatch(setReportsDate({ year, month: arrayOfMonth.indexOf(month) }));
    SetQueryParams(year, arrayOfMonth.indexOf(month));
    dispatch(reportsOperations.getReportsFull(QUERY_PARAMS));
    setMonth(prevState => arrayOfMonth[arrayOfMonth.indexOf(prevState) - 1]);
  };

  const onNextMonth = () => {
    navigate('/reports');
    if (month === 'December') {
      setYear(year + 1);
    }
    if (arrayOfMonth.indexOf(month) > 10) {
      dispatch(
        setReportsDate({ year, month: arrayOfMonth.indexOf(month) - 10 })
      );
      SetQueryParams(year, arrayOfMonth.indexOf(month) - 10);
      dispatch(reportsOperations.getReportsFull(QUERY_PARAMS));
      return setMonth(arrayOfMonth[0]);
    }

    dispatch(setReportsDate({ year, month: arrayOfMonth.indexOf(month) + 2 }));
    SetQueryParams(year, arrayOfMonth.indexOf(month) + 2);
    dispatch(reportsOperations.getReportsFull(QUERY_PARAMS));
    setMonth(arrayOfMonth[arrayOfMonth.indexOf(month) + 1]);
  };

  useEffect(() => {
    dispatch(setReportsDate({ year, month: arrayOfMonth.indexOf(month) + 1 }));
    SetQueryParams(year, arrayOfMonth.indexOf(month) + 1);
    dispatch(reportsOperations.getReportsFull(QUERY_PARAMS));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
          <Summary year={year} month={arrayOfMonth.indexOf(month) + 1} />
          <Categories />
          <Outlet />
        </section>
      </Container>
    </>
  );
}
