import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import arrowLeft from '../../../images/icons/arrow-left.svg';
import arrowRight from '../../../images/icons/arrow-right.svg';
import s from './currentPeriod.module.css';

const arrayOfMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const CurrentPeriod = () => {
  const location = useLocation();

  location.pathname === '/reports' &&
    location.pathname === '/home ' &&
    console.log(location);
  const date = new Date();
  const currentMonth = date.getMonth();
  const [month, setMonth] = useState(arrayOfMonth[currentMonth]);
  console.log(arrayOfMonth[date.getMonth() - 1]);
  const onPreviousMonth = () => {
    setMonth(arrayOfMonth[currentMonth - 1]);
  };

  return (
    <div className={s.container}>
      <p className={s.currentPeriod}>Current period:</p>
      <div className={s.dataWrapper}>
        <button
          type="button"
          className={s.arrowButton}
          onClick={onPreviousMonth}
        >
          <img className={s.img} src={arrowLeft} alt="" />
        </button>
        <div className={s.date}>
          <p className={s.month}>{month}</p>
          <p className={s.year}>{date.getFullYear()}</p>
        </div>
        <button type="button" className={s.arrowButton}>
          <img className={s.img} src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
};
