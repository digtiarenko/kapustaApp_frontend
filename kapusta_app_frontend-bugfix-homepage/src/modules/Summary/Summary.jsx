import s from './summary.module.css';

export const Summary = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        <li className={s.listItem}>
          Expenses: <div className={s.expenses}> - 18 000 00 грн.</div>
        </li>
        <li className={s.listItem}>
          Income: <div className={s.income}> + 45 000 00 грн.</div>
        </li>
      </ul>
    </div>
  );
};
