import React, { useEffect } from 'react';
import s from './TransactionTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionsByTypeAndDate,
  deleteTransactionById,
} from '../../../redux/transactions/transactionsOperations';
import { getTransactions } from '../../../redux/transactions/transactionsSelectors';
import { TransactionTableRow } from '../TransactionTableRow/TransactionTableRow';

const TransactionTable = ({ date, type }) => {
  const onDelete = id => () => {
    dispatch(deleteTransactionById(id));
  };
  const transactions = useSelector(getTransactions);
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
          {transactions &&
            transactions.map(transaction => (
              <TransactionTableRow
                key={transaction._id}
                id={transaction._id}
                date={transaction.date}
                description={transaction.description}
                type={transaction.type}
                value={transaction.value}
                category={transaction.category.name}
                onDelete={onDelete}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
