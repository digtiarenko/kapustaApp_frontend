import s from './ReportsSlider.module.css';

import { ReactComponent as ArrowLeftSVG } from '../../../../images/icons/arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../../../images/icons/arrow-right.svg';

export default function SliderIncomeExpenses({ header, switchPage }) {
  return (
    <div className={s.expenses}>
      <button
        className={s.arrow}
        onClick={() => {
          switchPage(header);
        }}
      >
        <ArrowLeftSVG />
      </button>
      <h2 className={s.header}>{header}</h2>
      <button
        className={s.arrow}
        onClick={() => {
          switchPage(header);
        }}
      >
        <ArrowRightSVG />
      </button>
    </div>
  );
}
