import Balance from '../../modules/balance/components/Balance';
import ReportsLink from '../../modules/reports/components/ReportsLink';
import Container from 'modules/Container';
import s from './HomePage.module.css';
import IncomeExpense from '../../modules/SecondPage/IncomeExpense/IncomeExpense';
import { forwardRef, useEffect, useState } from 'react';
import TransactionTable from '../../modules/SecondPage/TransactionTable/TransactionTable';
import TransactionForm from '../../modules/SecondPage/TransactionForm/TransactionForm';
import moment from 'moment';
import Summary from '../../modules/SecondPage/Summary/Summary';
import { ReactComponent as CalendarLogo } from 'images/icons/calendar.svg';

import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  getTransactionsByDate,
  getTransactionsByTypeAndDate,
} from 'redux/transactions/transactionsOperations';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerCustomInput = forwardRef(({ value, onClick }, ref) => (
  <button className={s.dateButton} onClick={onClick} ref={ref}>
    <CalendarLogo className={s.calendarIcon} />
    <span className={s.dateButtonText}>{value}</span>
  </button>
));

const formatDate = date => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1;
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return year + '-' + month + '-' + day;
};

export default function HomePage() {
  const notMobile = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [type, setType] = useState('expenses');

  useEffect(() => {
    if (notMobile) {
      if (type === 'expenses' || type === 'income')
        dispatch(
          getTransactionsByTypeAndDate({
            date,
            type,
          })
        );
      navigation('/home/expenses');
    }
    if (isMobile) {
      setType('expenses-income');
      dispatch(
        getTransactionsByDate({
          date: formatDate(selectedDate),
        })
      );
      navigation('/home');
    }
  }, [date, dispatch, isMobile, navigation, notMobile, selectedDate, type]);

  useEffect(() => {
    if (location.pathname === '/home/expenses') {
      setType('expenses');
    }
    if (location.pathname === '/home/income') {
      setType('income');
    }
  }, [location.pathname]);

  return (
    <div className={s.pageWrapper}>
      <div className={s.content}>
        <Container>
          <section>
            <div className={s.c}>
              <div>
                <div className={s.rel}>
                  <h1 className={s.pageName}>Page for Revenue and Expenses</h1>
                  <p className={s.pageName}>
                    Welcome to the best resource for managing budget
                  </p>
                  <div className={s.balanceBlock}>
                    <ReportsLink />
                    <Balance type="home" />
                    {isMobile && (
                      <div className={s.dateWrapper}>
                        <DatePicker
                          dateFormat="dd.MM.yyyy"
                          selected={selectedDate}
                          onChange={date => setSelectedDate(date)}
                          customInput={<DatePickerCustomInput />}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {notMobile ? (
                  <div className={s.buttonCont}>
                    <div className={s.ab}>
                      <IncomeExpense />
                    </div>
                    <div className={s.container}>
                      <TransactionForm
                        date={date}
                        setDate={setDate}
                        type={type}
                      />
                      <div className={s.overlaySummery}>
                        <TransactionTable date={date} type={type} />
                        <div>
                          <Summary />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <TransactionTable
                    date={formatDate(selectedDate)}
                    type={type}
                  />
                )}
              </div>
            </div>
          </section>
          {isMobile && (
            <div className={s.buttonCont}>
              <IncomeExpense />
            </div>
          )}
        </Container>
      </div>
    </div>
  );
}
