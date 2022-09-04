import { Outlet } from 'react-router-dom';
import { Summary } from '../../modules/Summary/Summary';
import s from './ReportPage.module.css';
import { ButtonGoMain } from 'modules/Buttons/ButtonGoMain';
import Balance from 'modules/balance/components/Balance';
import { CurrentPeriod } from '../../modules/CurrentPeriod/CurrentPeriod.jsx';
import { useCallback, useEffect, useState } from 'react';
import Container from 'modules/navigation/components/Container';
import { useDispatch, useSelector } from 'react-redux';
import {
  createUserTransaction,
  getTransactionsByTypeAndDate,
  deleteTransactionById,
} from 'redux/transactions/transactionsOperations';
import { getTransactions } from '../../redux/transactions/transactionsSelectors';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      createUserTransaction({
        date: '2022-8-31',
        description: 'Beef',
        category: '630d23089692d4e9360ec34d',
        value: 300,
        type: 'expenses',
      })
    );
    dispatch(
      getTransactionsByTypeAndDate({
        type: 'expenses',
        date: '2022-8-31',
        page: '1',
        limit: '9',
      })
    );
  }, []);

  const transactions = useSelector(getTransactions);

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
          {/* <ul>
            {transactions &&
              transactions.map(transaction => (
                <li key={transaction._id}>
                  <button onClick={deleteId(transaction._id)}></button>
                  {transaction._id}
                </li>
              ))}
          </ul> */}
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
          <Summary></Summary>
          <Outlet />
        </section>
      </Container>
    </>
  );
}
