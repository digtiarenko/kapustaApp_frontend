import React from 'react';
import { ReactComponent as Delete } from '../../../images/icons/delete.svg';
import s from './TransactionTableRow.module.css';

function TransactionTableRow({ date, description, category, sum }) {
  return (
    <tr className={s.tableRow}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td className={s.sum}>{sum}</td>
      <td>
        <button type="button" className={s.button}>
          <Delete className={s.svg} />
        </button>
      </td>
    </tr>
  );
}

export default TransactionTableRow;
