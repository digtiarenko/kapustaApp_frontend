import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataByCategory } from 'redux/reports/reportsSelectors';
import ReportChartMobile from './ReportChartMobile';

//
const ReportChart = () => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const handleScreenResize = () => setScreenWidth(window.screen.width);

  const { category, type } = useParams();

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);
  // const fullData = useSelector(getReportsFull);
  // const dataMonth = useSelector(getDataByMonth);
  // const dataType = useSelector(getDataByType(type));

  const dataCategory = useSelector(getDataByCategory(type, category));
  // const data = dataCategory.arrOfTransactions;
  const data = dataCategory[0].arrOfTransactions;
  console.log('data:', data);

  // console.log('dataByMonth:', dataMonth);
  // console.log('dataByType:', dataType);
  // console.log('dataByCategory:', dataCategory);
  return (
    <>
      {screenWidth < 768 ? <ReportChartMobile data={data} /> : <div>Chart</div>}
    </>
  );
};

export default ReportChart;
