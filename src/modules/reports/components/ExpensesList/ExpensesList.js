import { useSelector } from 'react-redux';
import { getCategoriesList } from '../../../../redux/categories/categoriesSelectors';
import s from './ExpensesList.module.css';
import ExpensesItem from '../ExpensesItem';
import icons from '../../../../images/icons/category/expenses/categoryIcons';

export default function ExpensesList() {
  const categoriesList = useSelector(getCategoriesList);
  let expensesList;
  if (categoriesList) {
    expensesList = categoriesList.filter(value => value.type === 'expenses');
    console.log(expensesList);
    console.log(icons['alcohol']);
    console.log(expensesList[8].name.split(', ').join('').toLowerCase());
    console.log(expensesList[0].category_id);
  }

  return (
    <ul className={s.list}>
      {expensesList &&
        expensesList.map(item => (
          <div className={s.item} key={item.name}>
            <ExpensesItem category={item.name} sum="200">
              <img
                src={icons[`${item.name.split(', ').join('').toLowerCase()}`]}
                alt={`${item.name}`}
                className={s.icon}
              />
            </ExpensesItem>
          </div>
        ))}
    </ul>
  );
}
