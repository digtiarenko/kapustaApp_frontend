import React, { useEffect } from 'react';
import s from './TransactionTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionsByDate,
  getTransactionsByTypeAndDate,
} from '../../../redux/transactions/transactionsOperations';
import { getTransactions } from '../../../redux/transactions/transactionsSelectors';
import { TransactionTableRow } from '../TransactionTableRow/TransactionTableRow';
import EmptyRows from './EmptyRows';

const TransactionTable = ({ date, type }) => {
  const transactions = useSelector(getTransactions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (type === 'expenses-income') {
      transactions &&
        dispatch(
          getTransactionsByDate({
            date,
          })
        );
    } else {
      transactions &&
        type &&
        dispatch(
          getTransactionsByTypeAndDate({
            date,
            type,
          })
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, type]);

  const sortTransactions = [...transactions].sort((a, b) => {
    return b.createdAt.localeCompare(a.createdAt);
  });

  return (
    <table className={s.table}>
      <thead className={s.tableHeader}>
        <tr>
          <th className={s.tableHeaderTitle}>date</th>
          <th className={s.tableHeaderTitle}>description</th>
          <th className={s.tableHeaderTitle}>category</th>
          <th className={s.tableHeaderTitle}>sum</th>
          <th className={s.tableHeaderTitle}></th>
        </tr>
      </thead>
      <tbody className={s.tableBody}>
        {sortTransactions &&
          sortTransactions.map(transaction => (
            <TransactionTableRow
              key={transaction._id}
              id={transaction._id}
              date={transaction.date}
              description={transaction.description}
              type={transaction.type}
              value={transaction.value}
              category={transaction.category.name}
            />
          ))}
        <EmptyRows className={s.emptyRows} />
      </tbody>
    </table>
  );
};

export default TransactionTable;
