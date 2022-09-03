import Datepicker from 'modules/DatePicker/Datepicker';
import Balance from '../../modules/balance/components/Balance';
import ReportsLink from '../../modules/reports/components/ReportsLink';
import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <section>
        <h1>Page for Revenue and Expenses</h1>
        <p>Welcome to the best resource for managing budget</p>
        <div className={s.balanceBlock}>
          <ReportsLink />
          <Balance type="home" />
        </div>
        <Datepicker />
      </section>
    </>
  );
}
