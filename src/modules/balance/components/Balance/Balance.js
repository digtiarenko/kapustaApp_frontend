import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Balance.module.css';
import CurrencyInput from 'react-currency-input-field';
import ReportsLink from '../../../reports/components/ReportsLink';

export default function Balance() {
  const [balance, setBalance] = useState(null);
  const [isReadable, setIsReadable] = useState(true);

  return (
    <form /* onSubmit={handleSubmit} */>
      <div className={s.common}>
        <ReportsLink />
        <div className={s.balanceBlock}>
          <h2 className={s.name}>Balance:</h2>
          <div className={s.balanceInputBlock}>
            <CurrencyInput
              className={s.input}
              allowDecimals
              placeholder={'00.00 UAH'}
              decimalSeparator="."
              decimalScale={2}
              suffix={' UAH'}
              value={balance}
              /* onValueChange={handleOnValueChange} */
              disabled={!isReadable}
            />
            <button type="submit" className={s.confirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
Balance.propType = {
  balance: PropTypes.number.isRequired,
};
