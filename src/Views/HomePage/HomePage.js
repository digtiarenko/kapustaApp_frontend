import Balance from '../../modules/balance/components/Balance';
import ReportsLink from '../../modules/reports/components/ReportsLink';
import Page from 'modules/SecondPage/Page/Page';
import Container from 'modules/navigation/components/Container';
import s from './HomePage.module.css';
import { useState } from 'react';

export default function HomePage() {
  const [balance, setBalance] = useState(null);
  return (
    <>
      <Container>
        <section>
          <h1 className={s.pageName}>Page for Revenue and Expenses</h1>
          <p className={s.pageName}>
            Welcome to the best resource for managing budget
          </p>
          <div className={s.balanceBlock}>
            <ReportsLink />
            <Balance type="home" balance={balance} setBalance={setBalance} />
          </div>
          <div>
            <Page balance={balance} setBalance={setBalance} />
          </div>
        </section>
      </Container>
    </>
  );
}
