import s from './TransactionForm.module.css';
import React, { useState } from 'react';
import { ReactComponent as CalendarLogo } from '../../../images/icons/calendar.svg';
import { ReactComponent as CalculatorLogo } from '../../../images/icons/calculator.svg';
import moment from 'moment';
import Dropdown from 'modules/dropDownCategories/Dropdown';
import { useDispatch } from 'react-redux';
import { createUserTransaction } from 'redux/transactions/transactionsOperations';
// import balanceOperations from 'redux/initialBalance/initialBalanceOperations';

function TransactionForm({ date, setDate, type }) {
  const [description, setDescription] = useState('');
  const [categoryName, setCategoryName] = useState(null);
  const [categoryID, setCategoryID] = useState(null);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  // const addInitialBalance = data =>
  //   dispatch(balanceOperations.addInitialBalance(data));

  // const getUpdatedBalance = typeOfTransaction => {
  //   switch (typeOfTransaction) {
  //     case 'expenses':
  //       const resultOfExpenses = balance - Math.abs(value);
  //       addInitialBalance({ balance: resultOfExpenses });
  //       return;
  //     case 'income':
  //       const resultOfIncome = balance + Math.abs(value);
  //       addInitialBalance({ balance: resultOfIncome });
  //       return;
  //     default:
  //       return balance;
  //   }
  // };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'date':
        setDate(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'amount':
        setValue(Number(value));
        break;

      default:
        break;
    }
  };

  const onCategorySet = value => {
    setCategoryID(value._id);
    setCategoryName(value.name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      createUserTransaction({
        date,
        description,
        category: categoryID,
        value,
        type,
      })
    );
    // console.log(getUpdatedBalance(type));
    setDescription('');
    setCategoryName('');
    setValue('');
  };

  const onHandleResetForm = () => {
    setDate(moment(new Date()).format('YYYY-MM-DD'));
    setDescription('');
    setCategoryName('');
    setValue('');
  };

  return (
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
        <Dropdown
          type={type}
          onCategorySet={onCategorySet}
          categoryName={categoryName}
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
            placeholder="0.00"
            value={value}
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
  );
}
export default TransactionForm;
