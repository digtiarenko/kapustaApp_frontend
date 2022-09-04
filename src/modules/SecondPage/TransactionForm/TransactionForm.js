import s from './TransactionForm.module.css';
import React, { useState } from 'react';
import { ReactComponent as CalendarLogo } from '../../../images/icons/calendar.svg';
import { ReactComponent as CalculatorLogo } from '../../../images/icons/calculator.svg';

import moment from 'moment';

import Dropdown from 'modules/dropDownCategories/Dropdown';

function TransactionForm() {
  const [date, setDate] = useState(moment().format('DD-MM-YYYY'));
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setAmount(Number(value));
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const transactionsList = {
      description: description,
      date: date,
      category: category,
      amount: amount,
    };
    if (
      !transactionsList.category ||
      !transactionsList.description ||
      !transactionsList.amount
    ) {
      return alert('Please fill in all fields');
    }

    // dispatch
  };

  const onHandleResetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategory('');
    setAmount('');
  };
  return (
    <>
      <form className={s.wrap} onSubmit={handleSubmit} autoComplete="off">
        <div className={s.wrapInput}>
          <div className={s.dateWrapper}>
            <input
              aria-label="Date"
              name="date"
              onChange={handleChange}
              type="date"
              className={s.datePicker}
              value={date}
            />
            <CalendarLogo className={s.calendarIcon} />
          </div>
          <input
            aria-label="Text"
            onChange={handleChange}
            className={s.description}
            name="description"
            type="text"
            placeholder="Product description"
            value={description}
          />
          {/* <Select
          aria-label="Select"
          placeholder={<div>Product category</div>}
          width="200px"
          styles={customStyles}
          value={category}
          onChange={setCategory}
          options={selectOptions()}
          className={s.select}
        /> */}
          <div className={s.inputCountWrapper}>
            <input
              aria-label="Number"
              onChange={handleChange}
              type="number"
              name="amount"
              className={s.inputCount}
              placeholder="00.00"
              value={amount}
            />
          </div>{' '}
          <CalculatorLogo />
        </div>
        <div className={s.buttonWrap}>
          <button aria-label="Input" type="submit" className={s.btnInput}>
            input
          </button>
          <button
            aria-label="Clear"
            type="button"
            className={s.btnClear}
            onClick={onHandleResetForm}
          >
            clear
          </button>
        </div>
      </form>
    </>
  );
}
export default TransactionForm;
