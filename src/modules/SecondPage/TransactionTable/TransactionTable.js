import React, { useEffect } from 'react';
import s from './TransactionTable.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTransactionsByTypeAndDate,
  deleteTransactionById,
} from '../../../redux/transactions/transactionsOperations';
import { getTransactions } from '../../../redux/transactions/transactionsSelectors';

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

  console.log(transactions);

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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
