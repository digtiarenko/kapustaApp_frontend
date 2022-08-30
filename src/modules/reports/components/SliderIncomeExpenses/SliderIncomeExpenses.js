import { Link } from 'react-router-dom';
import s from './SliderIncomeExpenses.module.css';

import { ReactComponent as ArrowLeftSVG } from '../../../../images/icons/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../../../images/icons/arrow-right.svg';

export default function SliderIncomeExpenses({ text }) {
  return (
    <div className={s.expenses}>
      <Link to="/reports/income" className={s.arrow}>
        <ArrowLeftSVG />
      </Link>
      <h2 className={s.header}>{text}</h2>
      <Link to="/reports/income" className={s.arrow}>
        <ArrowRightSVG />
      </Link>
    </div>
  );
}
