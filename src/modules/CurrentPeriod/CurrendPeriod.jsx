import {useState} from 'react';
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
   setMonth(prevState => arrayOfMonth[arrayOfMonth.indexOf(prevState) - 1])
    if (arrayOfMonth.indexOf(month) <= 0) {
      setYear(year - 1)
      setMonth(arrayOfMonth[11])
    }
  };

  const onNextMonth =  () => {
    setMonth((prevState) => arrayOfMonth[arrayOfMonth.indexOf(prevState) + 1])
    if (arrayOfMonth.indexOf(month) >= 11) {
      setYear(year + 1)
     setMonth(arrayOfMonth[0])
    }
  }
  // const userMonth = 8
  // const numberOfMonth = arrayOfMonth.indexOf(month) + 1

  return (
    <div className={s.container}>
      <p className={s.currentPeriod}>Current period:</p>
      <div className={s.dataWrapper}>
        <button
          type="button"
          className={s.arrowButton}
          onClick={onPreviousMonth}
          // disabled={  numberOfMonth === userMonth }
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
