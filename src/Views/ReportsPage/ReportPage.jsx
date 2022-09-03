import { Outlet } from 'react-router-dom';
import { Summary } from '../../modules/Summary/Summary';
import s from './ReportPage.module.css';
import { ButtonGoMain } from 'modules/Buttons/ButtonGoMain';
import Balance from 'modules/balance/components/Balance';
import { CurrentPeriod } from '../../modules/CurrentPeriod/CurrentPeriod.jsx';
import { useEffect, useState } from 'react';
import Container from 'modules/navigation/components/Container';
import { useDispatch, useSelector } from 'react-redux';
import categoriesOperations from 'redux/categories/categoriesOperations';
import { getCategoriesList } from '../../redux/categories/categoriesSelectors';
import {
  getTransactionsByTypeAndDate,
  deleteTransactionById,
} from 'redux/transactions/transactionsOperations';

// const mockParams = {
//   date: '2022-8-31',
//   description: 'Beef',
//   category: '630d23089692d4e9360ec34d',
//   value: 300,
//   type: 'expenses',
// };

const arrayOfMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function ReportPage() {
  const dispatch = useDispatch();
  // Как работать с categories
  const getCategories = () =>
    dispatch(categoriesOperations.getCategoriesList());
  const categoriesList = useSelector(getCategoriesList);
  console.log(categoriesList);

  useEffect(() => {
    dispatch(
      getTransactionsByTypeAndDate({
        type: 'expenses',
        date: '2022-8-31',
        page: '1',
        limit: '9',
      })
    );
    dispatch(deleteTransactionById('63122e618b68d8fc22005f63'));
  }, [dispatch]);

  // console.log(categoriesList);
  // console.log(categoriesList.filter(category => category.type === 'expenses'));

  // useEffect(() => {
  //   dispatch(createUserTransaction(mockParams));
  //   dispatch(
  //     getTransactionsByTypeAndDate({
  //       type: 'expenses',
  //       date: '2022-8-31',
  //       page: '1',
  //       limit: '9',
  //     })
  //   );
  // }, []);

  const date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = arrayOfMonth[date.getMonth()];
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  const onPreviousMonth = () => {
    if (arrayOfMonth.indexOf(month) < 1) {
      setYear(year - 1);
    }
    if (
      arrayOfMonth.indexOf(month) === -1 ||
      arrayOfMonth.indexOf(month) === 0
    ) {
      return setMonth(arrayOfMonth[11]);
    }
    setMonth(prevState => arrayOfMonth[arrayOfMonth.indexOf(prevState) - 1]);
  };

  const onNextMonth = () => {
    if (month === 'December') {
      setYear(year + 1);
    }
    if (arrayOfMonth.indexOf(month) > 10) {
      return setMonth(arrayOfMonth[0]);
    }
    setMonth(arrayOfMonth[arrayOfMonth.indexOf(month) + 1]);
  };

  return (
    <>
      <Container>
        <section className={s.section}>
          <div className={s.inlineBlock}>
            <ButtonGoMain />
            <div className={s.inlineBalanceBlock}>
              <CurrentPeriod
                onPreviousMonth={onPreviousMonth}
                onNextMonth={onNextMonth}
                month={month}
                year={year}
              />
              <Balance />
            </div>
          </div>
          <Summary></Summary>
          <Outlet />
          <h1>Page for working with the reports</h1>
          <p>
            Welcome to the best resource for see how much you earn and spend
          </p>
        </section>
      </Container>
    </>
  );
}
