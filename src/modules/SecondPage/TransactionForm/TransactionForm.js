import s from './TransactionForm.module.css';
import { ReactComponent as Calc } from '../../../images/icons/calculator.svg';

function TransactionForm() {
  return (
    <div>
      <form className={s.form}>
        <div className={s.calendarWrapper}>
          <span className={s.watch}></span>
        </div>

        <input
          className={s.product}
          type="text"
          placeholder="Product description"
        />

        <div className={s.category}>
          <p className={s.text}>Product category</p>
        </div>

        <di className={s.calc}>
          <input className={s.sammy} type="text" placeholder="0,00" />
          <Calc className={s.svg} width="20" height="20" />
        </di>

        <div className={s.btnWrapper}>
          <button type="submit" className={s.btn}>
            input
          </button>

          <button type="button" className={s.btn}>
            clear
          </button>
        </div>
      </form>
    </div>
  );
}
export default TransactionForm;
