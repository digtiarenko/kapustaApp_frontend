import React, { useEffect } from 'react';
import s from './TransactionTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionsByTypeAndDate,
  deleteTransactionById,
} from '../../../../redux/transactions/transactionsOperations';
import { getTransactions } from '../../../../redux/transactions/transactionsSelectors';
import TransactionTableRow from '../TransactionTableRow/TransactionTableRow';

function TransactionTable({ date, type }) {
  console.log(date);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getTransactionsByTypeAndDate({
        type,
        date,
        page: '1',
        limit: '9',
      })
    );
  }, [date, dispatch, type]);

  const transactions = useSelector(getTransactions);

  const transactionData = {
    type: 'expenses',
    date: '2022-8-30',
    description: 'milk',
    category: 'Products',
    sum: 300,
  };
  const onDelete = event => console.log(event);

  return (
    <div className={s.container_table}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>дата</th>
            <th>описание</th>
            <th>категория</th>
            <th>сумма</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TransactionTableRow
            transactionData={transactionData}
            onDelete={onDelete}
          />
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
