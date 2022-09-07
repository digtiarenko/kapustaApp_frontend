import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  YAxis,
} from 'recharts';

import styles from './ReportChart.module.css';
import { CustomTooltip } from './ReportChartMobile';

const renderBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#52555F"
      textAnchor="middle"
      dy={-8}
      fontSize={12}
    >{`${value} UAH`}</text>
  );
};

const renderCategoryLabel = ({ x, y, width, value }) => {
  console.log(value);
  // let labelText = value;
  // if (value.length > 8) {
  //   labelText = value.substr(0, 8) + '...';
  // }
  return (
    <text x={x} y={y} dx={0} dy={-10} fontSize={10}>
      {value}
    </text>
  );
};

export default function ReportChartDesktop({ screen, data }) {
  const newData = data.map(item => {
    let trimDescription = item.description;
    if (trimDescription.length > 8) {
      trimDescription = item.description.substr(0, 8) + '...';
    }
    return {
      ...item,
      trimDescription: trimDescription,
    };
  });
  let chartWidth = screen < 1280 ? 635 : 758;
  if (data.length > 10) {
    chartWidth = 65 * data.length;
  }

  return (
    <div className={styles.chartView}>
      <BarChart
        width={chartWidth}
        height={314}
        margin={{ left: 15, top: -20, bottom: 40 }}
        data={newData}
        barCategoryGap={10}
        barSize={10}
        className={styles.chart}
      >
        <CartesianGrid
          x={0}
          vertical={false}
          horizontalPoints={[0, 40, 80, 120, 160, 200, 245]}
        />

        <Tooltip cursor={false} content={<CustomTooltip />} />
        <XAxis
          hide={false}
          axisLine={true}
          // textAnchor="end"
          // angle={-60}
          dataKey="description"
          type="category"
          // tickSize={600}
          // dy={5}
          fontSize={12}
          color={'#52555F'}
          label={renderCategoryLabel}
        >
          {/* <LabelList
            dataKey="description"
            content={renderCategoryLabel}
            fill="#52555F"
          /> */}
        </XAxis>
        <YAxis hide type="number" />

        <Bar
          dataKey="value"
          radius={[10, 10, 0, 0]}
          className={styles.chartBar}
        >
          {data.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index % 3 ? '#FFDAC0' : '#ff751d'}
            />
          ))}
          <LabelList
            dataKey="value"
            content={renderBarLabel}
            fill="#52555F"
            position="insideTop"
          />
        </Bar>
      </BarChart>
    </div>
  );
}
