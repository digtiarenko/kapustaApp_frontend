import React from 'react';
import { ReactComponent as Delete } from '../../../images/icons/delete.svg';
import s from './TransactionTableRow.module.css';

import { deleteTransactionById } from '../../../redux/transactions/transactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import balanceOperations from 'redux/initialBalance/initialBalanceOperations';

const getSumTypeStyle = type => {
  switch (type) {
    case 'income':
      return {
        color: '#407946',
      };
    case 'expenses':
      return {
        color: '#E7192E',
      };
    default:
      return {};
  }
};

export function TransactionTableRow({
  id,
  date,
  description,
  category,
  value,
  type,
}) {
  const dispatch = useDispatch();

  const initialBalance = useSelector(state => state.balance.balance);
  const addInitialBalance = data =>
    dispatch(balanceOperations.addInitialBalance(data));

  const getUpdatedBalance = (typeOfTransaction, value) => {
    switch (typeOfTransaction) {
      case 'expenses':
        const resultOfExpenses = initialBalance + Math.abs(value);
        addInitialBalance({ balance: resultOfExpenses });
        return;
      case 'income':
        const resultOfIncome = initialBalance - Math.abs(value);
        addInitialBalance({ balance: resultOfIncome });
        return;
      default:
        return initialBalance;
    }
  };

  const onDelete = (id, type, value) => () => {
    getUpdatedBalance(type, value);
    dispatch(deleteTransactionById(id));
  };

  const sumStyle = getSumTypeStyle(type);
  return (
    <tr key={id} className={s.tableRow}>
      <td className={s.tableDataDate}>{date}</td>
      <td className={s.tableDataDescription}>{description}</td>
      <td className={s.tableDataCategory}>{category}</td>
      <td className={s.tableDataSum} style={sumStyle}>
        {type === 'expenses' && value > 0 && <span className={s.minus}>-</span>}
        {value} грн
      </td>
      <td className={s.tableDataBtn}>
        <button
          type="button"
          className={s.button}
          onClick={onDelete(id, type, value)}
        >
          <Delete className={s.svg} />
        </button>
      </td>
    </tr>
  );
}

export default TransactionTableRow;
