import Container from 'modules/navigation/components/Container';
// import s from './AddTransactions.module.css';
import { useEffect, useState } from 'react';
import TransactionForm from '../../modules/SecondPage/TransactionForm/TransactionForm';
import moment from 'moment';
import { ButtonGoMain } from 'modules/Buttons/ButtonGoMain';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export default function AddTransactions() {
  const notMobile = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location = useLocation();
  const navigation = useNavigate();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState('');

  useEffect(() => {
    if (location.pathname === '/add_expenses') {
      setType('expenses');
    }
    if (location.pathname === '/add_income') {
      setType('income');
    }
  }, [location.pathname]);

  useEffect(() => {
    if (notMobile) {
      navigation('/home/expenses');
    }
    if (
      isMobile &&
      location.pathname !== '/add_expenses' &&
      location.pathname !== '/add_income'
    ) {
      navigation('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, notMobile]);
  return (
    <Container>
      <section>
        <ButtonGoMain />
        <TransactionForm date={date} setDate={setDate} type={type} />
      </section>
    </Container>
  );
}
