import React, { useEffect } from 'react';
import s from './TransactionTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsByTypeAndDate } from '../../../redux/transactions/transactionsOperations';
import { getTransactions } from '../../../redux/transactions/transactionsSelectors';
import { TransactionTableRow } from '../TransactionTableRow/TransactionTableRow';
import EmptyRows from './EmptyRows';

const TransactionTable = ({ date, type }) => {
  const transactions = useSelector(getTransactions);
  const dispatch = useDispatch();
  useEffect(() => {
    transactions &&
      type &&
      dispatch(
        getTransactionsByTypeAndDate({
          type,
          date,
          page: '1',
          limit: '9',
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, type]);

  return (
    <>
      <table className={s.table}>
        <thead>
          <tr>
            <th>date</th>
            <th>description</th>
            <th>category</th>
            <th>sum</th>
            <th></th>
          </tr>
        </thead>
      </table>

      <div className={s.scroll}>
        <table className={s.secondTable}>
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
                />
              ))}
            <EmptyRows />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
