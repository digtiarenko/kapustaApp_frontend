import { Summary } from '../../modules/Summary/Summary';
import s from './ReportPage.module.css';
import { ButtonGoMain } from 'modules/Buttons/ButtonGoMain';
import Balance from 'modules/balance/components/Balance';
import { CurrentPeriod } from '../../modules/CurrentPeriod/CurrendPeriod.jsx';

export default function ReportPage() {
  return (
    <>
      <section className={s.section}>
        <div className={s.inlineBlock}>
          <ButtonGoMain />
          <div className={s.inlineBalanceBlock}>
            <CurrentPeriod />
            <Balance />
          </div>
        </div>
        <Summary></Summary>
        <h1>Page for working with the reports</h1>
        <p>Welcome to the best resource for see how much you earn and spend</p>
      </section>
    </>
  );
}
