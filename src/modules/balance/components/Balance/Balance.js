import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import s from './Balance.module.css';
import Modal from '../Modal';
import balanceOperations from 'redux/initialBalance/initialBalanceOperations';

export default function Balance({ type }) {
  const [balance, setBalance] = useState(null);
  const [isReadable, setIsReadable] = useState(true);
  const [loading, setLoading] = useState(false);

  const initialBalance = useSelector(state => state.balance.balance);

  const dispatch = useDispatch();
  const getInitialBalance = () => dispatch(balanceOperations.fetchBalance());
  const addInitialBalance = data =>
    dispatch(balanceOperations.addInitialBalance(data));

  useEffect(() => {
    getInitialBalance();
    if (initialBalance) {
      setBalance(initialBalance);
      setIsReadable(false);
    } else {
      setLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialBalance]);

  const handleOnValueChange = event => {
    setBalance(event.floatValue);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (balance <= 0) {
      return;
    }
    addInitialBalance({ balance });
    setIsReadable(false);
  };

  return (
    balance && (
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.balanceBlock}>
          <h2 className={s.name}>Balance:</h2>
          <div className={s.balanceInputBlock}>
            <NumberFormat
              className={type === 'home' ? s.input : s.reportInputStyle}
              fixedDecimalScale={'true'}
              decimalScale={'2'}
              value={balance}
              placeholder={'00.00 UAH'}
              suffix={' UAH'}
              onValueChange={handleOnValueChange}
              disabled={!isReadable || type === 'report'}
            />
            <button
              type="submit"
              disabled={!isReadable}
              className={type === 'home' ? s.confirm : s.reportButtonStyle}
            >
              Confirm
            </button>

            <div className={s.modal}>
              {loading && isReadable && type === 'home' && <Modal />}
            </div>
          </div>
        </div>
      </form>
    )
  );
}
Balance.propType = {
  balance: PropTypes.number.isRequired,
};
