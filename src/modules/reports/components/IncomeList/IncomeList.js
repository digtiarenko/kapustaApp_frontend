import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import s from './IncomeList.module.css';
import ExpensesItem from '../ExpensesItem';
import icons from '../../../../images/icons/category/income/icons';

import categoriesOperations from 'redux/categories/categoriesOperations';
import { getCategoriesList } from '../../../../redux/categories/categoriesSelectors';

export default function IncomeList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesOperations.getCategoriesList());
  }, [dispatch]);

  const categoriesList = useSelector(getCategoriesList);
  let incomeList;
  if (categoriesList) {
    incomeList = categoriesList.filter(value => value.type === 'income');
    console.log(incomeList);
    console.log(icons['alcohol']);
    console.log(
      incomeList[0].name.split(', ').join('').split(' ').join('').toLowerCase()
    );
    console.log(incomeList[0].category_id);
  }

  return (
    <ul className={s.list}>
      {incomeList &&
        incomeList.map(item => (
          <div className={s.item} key={item.name}>
            <ExpensesItem category={item.name} sum="40000">
              <img
                src={
                  icons[
                    `${item.name
                      .split(', ')
                      .join('')
                      .split(' ')
                      .join('')
                      .toLowerCase()}`
                  ]
                }
                alt={`${item.name}`}
                className={s.icon}
              />
            </ExpensesItem>
          </div>
        ))}
    </ul>
  );
}
