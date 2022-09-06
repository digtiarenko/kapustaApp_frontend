import TransactionForm from '../SecondPage/TransactionForm/TransactionForm';
import { MdKeyboardBackspace } from 'react-icons/md';
import TransactionTable from 'modules/SecondPage/TransactionTable/TransactionTable';
import s from './MobileForm.module.css';

function MobileForm({ onClick, date, setDate, type, setType }) {
  const handleCloseModal = () => {
    onClick(false);
  };

  return (
    <div className={s.container}>
      <div className={s.wrap}>
        <MdKeyboardBackspace onClick={handleCloseModal} className={s.icon} />
      </div>
      <div className={s.content}>
        <TransactionForm
          date={date}
          setDate={setDate}
          type={type}
          setType={setType}
        />
        <TransactionTable date={date} type={type} />
      </div>
    </div>
  );
}

export default MobileForm;
