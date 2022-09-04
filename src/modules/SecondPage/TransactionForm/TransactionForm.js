import s from './TransactionForm.module.css';
import { ReactComponent as Calc } from '../../../images/icons/calculator.svg';
import Datepicker from 'modules/DatePicker/Datepicker';
import Dropdown from 'modules/dropDownCategories/Dropdown';
function TransactionForm() {
  return (
    <div className={s.containerForm}>
      <form className={s.form}>
        <div className={s.formControl}>
          <div className={s.calendarWrapper}>
            <Datepicker />
          </div>

          <input
            className={s.product}
            type="text"
            placeholder="Product description"
          />

          <div className={s.category}>
            {/* <p className={s.text}>Product category</p> */}
            <Dropdown />
          </div>

          <div className={s.calc}>
            <input className={s.sammy} type="text" placeholder="0,00" />
            <Calc className={s.svg} width="20" height="20" />
          </div>
        </div>
      </form>
      <div className={s.btnWrapper}>
        <button type="submit" className={s.btn}>
          input
        </button>

        <button type="button" className={s.btn}>
          clear
        </button>
      </div>
    </div>
  );
}
export default TransactionForm;
