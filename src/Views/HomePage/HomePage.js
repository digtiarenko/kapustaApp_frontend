import Balance from '../../modules/balance/components/Balance';
import ReportsLink from '../../modules/reports/components/ReportsLink';
import Container from 'modules/navigation/components/Container';
import s from './HomePage.module.css';
import IncomeExpense from '../../modules/SecondPage/IncomeExpense/IncomeExpense';
import { useEffect, useState } from 'react';
import TransactionTable from '../../modules/SecondPage/TransactionTable/TransactionTable';
import TransactionForm from '../../modules/SecondPage/TransactionForm/TransactionForm';
import moment from 'moment';
import SummaryTest from '../../modules/Summary/Summary_test';
import MobileForm from '../../modules/MobileModal/MobileForm';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TransactionTableRow from 'modules/SecondPage/TransactionTableRow/TransactionTableRow';

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const notMobile = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.98 });
  const location = useLocation();
  const navigation = useNavigate();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState('');

  useEffect(() => {
    if (
      location.pathname === '/home' ||
      location.pathname === '/home/expenses'
    ) {
      navigation('/home/expenses');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (location.pathname === '/home/expenses') {
      setType('expenses');
    }
    if (location.pathname === '/home/income') {
      setType('income');
    }
  }, [location.pathname]);

  const handleShowForm = value => {
    setShowForm(value);
  };
  return (
    <Container>
      <section>
        <div className={s.c}>
          {showForm ? (
            <MobileForm onClick={handleShowForm} date={date} />
          ) : (
            <>
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
                <div className={s.ab}>
                  <IncomeExpense />
                </div>
                <div className={s.container}>
                  {notMobile && (
                    <>
                      {' '}
                      <TransactionForm
                        date={date}
                        setDate={setDate}
                        type={type}
                      />
                    </>
                  )}
                  <div className={s.stats}>
                    {isTablet && (
                      <>
                        <TransactionTable date={date} type={type} />
                      </>
                    )}
                  </div>
                  <div className={s.stats}>
                    {isDesktop && (
                      <>
                        <TransactionTable date={date} type={type} />
                      </>
                    )}
                  </div>
                </div>
                <div>
                  {isTablet && (
                    <>
                      <SummaryTest />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </Container>
  );
}
