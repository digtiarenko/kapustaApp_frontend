import React, { useState } from 'react';
import IncomeExpense from '../IncomeExpense/IncomeExpense';
import TransactionTable from '../TransactionTable/TransactionTable';
import Summary from '../Summary/Summary';
import s from './Page.module.css';
import moment from 'moment';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';

export default function Page({ balance, setBalance }) {
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

  return (
    <>
      <IncomeExpense />
      <div className={s.container}>
        <TransactionForm
          date={date}
          setDate={setDate}
          type={type}
          balance={balance}
          setBalance={setBalance}
        />
        <div className={s.tables}>
          <TransactionTable date={date} type={type} />
          <Summary />
        </div>
      </div>
    </>
  );
}
