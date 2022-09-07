import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataByCategory } from 'redux/reports/reportsSelectors';
import ReportChartMobile from './ReportChartMobile';
import ReportChartDesktop from './ReportChartDesktop';

//
const ReportChart = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const handleScreenResize = () => setScreenWidth(window.screen.width);

  const { category, type } = useParams();

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);

  const dataCategory = useSelector(getDataByCategory(type, category));
  const data = dataCategory[0].arrOfTransactions;

  return (
    <>
      {screenWidth < 768 ? (
        <ReportChartMobile data={data} />
      ) : (
        <ReportChartDesktop screen={screenWidth} data={data} />
      )}
    </>
  );
};

export default ReportChart;
