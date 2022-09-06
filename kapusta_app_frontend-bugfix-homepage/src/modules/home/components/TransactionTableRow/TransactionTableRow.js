import React from 'react';
import { ReactComponent as Delete } from '../../../../images/icons/delete.svg';
import s from './TransactionTableRow.module.css';

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

function TransactionTableRow({ transactionData, onDelete }) {
  const { type, date, description, category, sum } = transactionData;

  const sumStyle = getSumTypeStyle(type);

  return (
    <tr className={s.tableRow}>
      <td className={s.tableDataDate}>{date}</td>
      <td className={s.tableDataDescription}>{description}</td>
      <td className={s.tableDataCategory}>{category}</td>
      <td className={s.tableDataSum} style={sumStyle}>
        {type === 'expenses' && sum > 0 && <span className={s.minus}>-</span>}
        {sum} грн
      </td>
      <td className={s.tableDataBtn}>
        <button type="button" className={s.button} onClick={onDelete}>
          <Delete className={s.svg} />
        </button>
      </td>
    </tr>
  );
}

export default TransactionTableRow;
