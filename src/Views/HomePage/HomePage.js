import Balance from '../../modules/balance/components/Balance';
import ReportsLink from '../../modules/reports/components/ReportsLink';
import Container from 'modules/Container';
import s from './HomePage.module.css';
import IncomeExpense from '../../modules/SecondPage/IncomeExpense/IncomeExpense';
import { useEffect, useState } from 'react';
import TransactionTable from '../../modules/SecondPage/TransactionTable/TransactionTable';
import TransactionForm from '../../modules/SecondPage/TransactionForm/TransactionForm';
import moment from 'moment';
import Summary from '../../modules/SecondPage/Summary/Summary';
import { ReactComponent as CalendarLogo } from 'images/icons/calendar.svg';

import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const notMobile = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const location = useLocation();
  const navigation = useNavigate();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState('');

  useEffect(() => {
    if (notMobile) {
      navigation('/home/expenses');
    }
    if (isMobile) {
      setType('expenses-income');
      navigation('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, notMobile]);

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
                  </div>
                </div>
                <div className={s.buttonCont}>
                  <div className={s.ab}>{notMobile && <IncomeExpense />}</div>
                  <div className={s.container}>
                    {notMobile ? (
                      <>
                        <TransactionForm
                          date={date}
                          setDate={setDate}
                          type={type}
                        />
                      </>
                    ) : (
                      <div className={s.dateWrapper}>
                        <input
                          aria-label="Date"
                          name="date"
                          onChange={e => setDate(e.target.value)}
                          type="date"
                          className={s.datePicker}
                          value={date}
                        />
                        <CalendarLogo className={s.calendarIcon} />
                      </div>
                    )}
                    <div className={s.overlaySummery}>
                      <TransactionTable date={date} type={type} />
                      <div>
                        <Summary />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      {isMobile && (
        <div className={s.buttonCont}>
          <IncomeExpense />
        </div>
      )}
    </div>
  );
}
