import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import arrowLeft from '../../images/icons/arrow-left.svg';
import arrowRight from '../../images/icons/arrow-right.svg';
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
  const date = new Date();
  let currentYear = date.getFullYear()
  let currentMonth = arrayOfMonth[date.getMonth()]
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear)

  const onPreviousMonth = () => {
    console.log(arrayOfMonth.indexOf(month))
    if (arrayOfMonth.indexOf(month) < 1) {
      setYear(year - 1)
    }
    if (arrayOfMonth.indexOf(month) === -1 || arrayOfMonth.indexOf(month) === 0) {
     return setMonth(arrayOfMonth[11])
    }
    setMonth((prevState) => arrayOfMonth[arrayOfMonth.indexOf(prevState) - 1])
  };

  const onNextMonth = () => {
    if (month === 'December') {
      setYear(year + 1)
    }
    if (arrayOfMonth.indexOf(month) > 10) {
      return setMonth(arrayOfMonth[0])
    }
    setMonth(arrayOfMonth[arrayOfMonth.indexOf(month) + 1])

  }

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
          <p className={s.year}>{year}</p>
        </div>
        <button type="button" className={s.arrowButton} onClick={onNextMonth}>
          <img className={s.img} src={arrowRight} alt="" />
        </button>
      </div>
    </div>
  );
};
