import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataByMonth } from 'redux/reports/reportsSelectors';
import ReportChartMobile from './ReportChartMobile';
import ReportChartDesktop from './ReportChartDesktop';

const ReportChart = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const handleScreenResize = () => setScreenWidth(window.screen.width);
  const { categoryId } = useParams();

  const reportFullMonth = useSelector(getDataByMonth);

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);
  const arrOfTypes =
    reportFullMonth[0] && reportFullMonth[0].date
      ? reportFullMonth[0].arrOfTypes
      : null;

  const arrOfCategories = arrOfTypes.length
    ? arrOfTypes.reduce((acc, item) => {
        return acc.concat(item.arrOfCategories);
      }, [])
    : null;

  const arrOfTransaction = arrOfCategories.length
    ? arrOfCategories.reduce((acc, item) => {
        if (item.category._id === categoryId) {
          return acc.concat(item.arrOfTransactions);
        }
        return acc;
      }, [])
    : null;
  const data = arrOfTransaction;
  return (
    <>
      {screenWidth < 768
        ? data && <ReportChartMobile data={data} />
        : data && <ReportChartDesktop screen={screenWidth} data={data} />}
    </>
  );
};

export default ReportChart;
