import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getDataByCategory,
  getDataByMonth,
  getDataByType,
  getReportsFull,
} from 'redux/reports/reportsSelectors';
import ReportChartMobile from './ReportChartMobile';

//
const ReportChart = () => {
  // const { year, month } = useOutletContext();
  const { category, type } = useParams();

  // const fullData = useSelector(getReportsFull);
  // const dataMonth = useSelector(getDataByMonth);
  const dataType = useSelector(getDataByType(type));

  const dataCategory = useSelector(getDataByCategory(type, category));
  const data = dataCategory.arrOfTransactions;

  console.log('data:', dataType);

  // console.log('dataByMonth:', dataMonth);
  // console.log('dataByType:', dataType);
  // console.log('dataByCategory:', dataCategory);
  return (
    <>
      <div>Chart</div>
      {/* <ReportChartMobile data={data} /> */}
    </>
  );
};

export default ReportChart;
