import Container from 'modules/navigation/components/Container';
import s from './AddTransactions.module.css';
import { useEffect, useState } from 'react';
import TransactionForm from '../../modules/SecondPage/TransactionForm/TransactionForm';
import moment from 'moment';
import { ButtonGoMain } from 'modules/Buttons/ButtonGoMain';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddTransactions() {
  const location = useLocation();
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [type, setType] = useState('');

  useEffect(() => {
    if (location.pathname === 'add_expenses') {
      setType('expenses');
    }
    if (location.pathname === 'add_income') {
      setType('income');
    }
  }, [location.pathname]);

  return (
    <Container>
      <section>
        <ButtonGoMain />
        <TransactionForm date={date} setDate={setDate} type={type} />
      </section>
    </Container>
  );
}
