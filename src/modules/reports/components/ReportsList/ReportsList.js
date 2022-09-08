import s from './ReportsList.module.css';
import ReportsItem from '../ReportsItem';
import icons from '../../../../images/icons/category/reports/categoryIcons';

export default function ExpensesList({ expenses, header }) {
  return (
    <ul className={s.list}>
      {expenses ? (
        expenses.map(item => (
          <div className={s.item} key={item.category.name}>
            <ReportsItem
              id={item.category._id}
              category={item.category.name}
              sum={item.totalSum}
            >
              <img
                src={
                  icons[
                    `${item.category.name
                      .split(', ')
                      .join('')
                      .split(' ')
                      .join('')
                      .toLowerCase()}`
                  ]
                }
                alt={`${item.category.name}`}
                className={s.icon}
              />
            </ReportsItem>
          </div>
        ))
      ) : header === 'expenses' ? (
        <p className={s.noData}>No expenses in this month</p>
      ) : (
        <p className={s.noData}>No income in this month</p>
      )}
    </ul>
  );
}
