import React, { useState } from 'react';
import IncomeExpense from '../IncomeExpense/IncomeExpense';
import TransactionTable from '../TransactionTable/TransactionTable';
import Summary from '../Summary/Summary';
import s from './Page.module.css';
import moment from 'moment';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TransactionForm from '../TransactionForm/TransactionForm';

export default function Page({ balance, setBalance }) {
  const location = useLocation();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState('expenses');

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
