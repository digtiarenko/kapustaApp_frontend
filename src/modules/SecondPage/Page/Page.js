import React, { useState } from 'react';
import IncomeExpense from '../IncomeExpense/IncomeExpense';
import TransactionTable from '../TransactionTable/TransactionTable';
import Summary from '../Summary/Summary';
import s from './Page.module.css';
import moment from 'moment';

import TransactionForm from '../TransactionForm/TransactionForm';

export default function Page() {
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState('expenses');
  return (
    <>
      <IncomeExpense />
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
      </div>
    </>
  );
}
