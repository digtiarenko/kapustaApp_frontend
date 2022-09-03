import React from 'react';
import IncomeExpense from '../IncomeExpense/IncomeExpense';
import TransactionTable from '../TransactionTable/TransactionTable';
import Summary from '../Summary/Summary';
import s from './Page.module.css';

import TransactionForm from '../TransactionForm/TransactionForm';

export default function Page() {
  return (
    <>
      <IncomeExpense />
      <div className={s.container}>
        <TransactionForm />
        <div className={s.tables}>
          <TransactionTable />
          <Summary />
        </div>
      </div>
    </>
  );
}
