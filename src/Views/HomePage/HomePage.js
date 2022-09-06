import Balance from '../../modules/balance/components/Balance';
import ReportsLink from '../../modules/reports/components/ReportsLink';
import Container from 'modules/navigation/components/Container';
import s from './HomePage.module.css';
import IncomeExpense from '../../modules/SecondPage/IncomeExpense/IncomeExpense';
import { useState } from 'react';
import TransactionTable from '../../modules/SecondPage/TransactionTable/TransactionTable';
import TransactionForm from '../../modules/SecondPage/TransactionForm/TransactionForm';
import moment from 'moment';
import Summary from '../../modules/Summary/Summary';
import { ReactComponent as CalendarLogo } from '../../images/icons/calendar.svg';
import MobileForm from '../../modules/MobileModal/MobileForm';
import { useMediaQuery } from 'react-responsive';

export default function HomePage() {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState('expenses');
  const [showForm, setShowForm] = useState(false);
  const notMobile = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.98 });

  const handleShowForm = value => {
    setShowForm(value);
  };

  return (
    <Container>
      <section>
        <div>
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
                {' '}
                <div className={s.ab}>
                  <IncomeExpense />
                </div>
                <div className={s.container}>
                  {/* <CalendarLogo className={s.calendarIcon} /> */}
                  {notMobile && (
                    <TransactionForm
                      date={date}
                      setDate={setDate}
                      type={type}
                      setType={setType}
                    />
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* 
        <div className={s.container}>
          <TransactionForm
            date={date}
            setDate={setDate}
            type={type}
            setType={setType}
          />
          <div className={s.tables}>
            <TransactionTable date={date} type={type} />
            <Summary />
          </div>
        </div> */}
      </section>
    </Container>
  );
}
