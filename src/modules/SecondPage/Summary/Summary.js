import PropTypes from 'prop-types';
import s from './Summary.module.css';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { ARRAY_OF_MONTHS } from 'utils/arrayOfMonth';
import { useParams } from 'react-router-dom';

function Summary({ month }) {
  const { type } = useParams();
  console.log(type);
  const getReportsMonthlyExpenses = useSelector(
    state => state.reports.monthExpenses
  );
  const getReportsMonthlyIncome = useSelector(
    state => state.reports.monthIncome
  );

  return (
    <div className={s.container}>
      <p className={s.title}> Summary</p>
      {type === 'expenses' && (
        <ul className={s.list}>
          {getReportsMonthlyExpenses &&
            getReportsMonthlyExpenses.map(getReportsMonthlyExpenses => (
              <li className={s.item} key={getReportsMonthlyExpenses.id}>
                <p>
                  {
                    ARRAY_OF_MONTHS[
                      parseInt(
                        10,
                        getReportsMonthlyExpenses.date.split('-')[1]
                      ) - 1
                    ]
                  }
                </p>
                <NumberFormat
                  className={s.expenses}
                  allowNegative={false}
                  thousandSeparator={' '}
                  fixedDecimalScale={'true'}
                  decimalScale={'2'}
                  value={getReportsMonthlyExpenses.totalSum}
                  displayType={'text'}
                  disabled={true}
                ></NumberFormat>
              </li>
            ))}
        </ul>
      )}
      {type === 'income' && (
        <ul className={s.list}>
          {getReportsMonthlyIncome &&
            getReportsMonthlyIncome.map(getReportsMonthlyIncome => (
              <li className={s.item} key={getReportsMonthlyIncome.id}>
                <p>
                  {
                    ARRAY_OF_MONTHS[
                      parseInt(10, getReportsMonthlyIncome.date.split('-')[1]) -
                        1
                    ]
                  }
                </p>
                <NumberFormat
                  className={s.expenses}
                  allowNegative={false}
                  thousandSeparator={' '}
                  fixedDecimalScale={'true'}
                  decimalScale={'2'}
                  value={getReportsMonthlyIncome.totalSum}
                  displayType={'text'}
                  disabled={true}
                ></NumberFormat>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

Summary.propType = {
  month: PropTypes.string.isRequired,
};

export default Summary;
