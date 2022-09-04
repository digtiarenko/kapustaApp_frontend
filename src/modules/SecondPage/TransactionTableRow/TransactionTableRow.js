import React from 'react';
import { ReactComponent as Delete } from '../../../images/icons/delete.svg';
import s from './TransactionTableRow.module.css';
import { deleteTransactionById } from '../../../redux/transactions/transactionsOperations';

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
  onDelete,
}) {
  const sumStyle = getSumTypeStyle(type);
  console.log(id);
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
        <button type="button" className={s.button} onClick={onDelete(id)}>
          <Delete className={s.svg} />
        </button>
      </td>
    </tr>
  );
}

export default TransactionTableRow;
