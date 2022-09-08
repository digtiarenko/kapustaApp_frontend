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

  const data =
    reportFullMonth[0] && reportFullMonth[0].date
      ? reportFullMonth[0].arrOfTypes[0].arrOfCategories
          .concat(reportFullMonth[0].arrOfTypes[1].arrOfCategories)
          .filter(item => item.category._id === categoryId)[0].arrOfTransactions
      : null;
  console.log(data);
  return (
    <>
      {screenWidth < 768
        ? data && <ReportChartMobile data={data} />
        : data && <ReportChartDesktop screen={screenWidth} data={data} />}
    </>
  );
};

export default ReportChart;
