import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  YAxis,
  Text,
} from 'recharts';

import styles from './ReportChart.module.css';
import { CustomTooltip } from './ReportChartMobile';

const CustomXAxisTick = props => {
  let labelText = props.payload.value;
  if (props.payload.value.length > 8) {
    labelText = props.payload.value.substr(0, 8) + '...';
  }
  return <Text {...props}>{labelText}</Text>;
};

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

export default function ReportChartDesktop({ screen, data }) {
  let chartWidth = screen < 1280 ? 635 : 758;
  if (data.length > 10) {
    chartWidth = 65 * data.length;
  }

  return (
    <div className={styles.chartView}>
      <BarChart
        width={chartWidth}
        height={366}
        margin={{ left: 15, top: -20, bottom: 40 }}
        data={data}
        barCategoryGap={10}
        barSize={40}
        className={styles.chart}
      >
        <CartesianGrid
          x={0}
          vertical={false}
          horizontalPoints={[56, 96, 136, 176, 216, 256, 296]}
        />

        <Tooltip cursor={false} content={<CustomTooltip />} />
        <XAxis
          hide={false}
          axisLine={false}
          tickLine={false}
          textAnchor="end"
          angle={-70}
          dataKey="description"
          type="category"
          tickSize={0}
          minTickGap={1}
          tick={
            <CustomXAxisTick
              style={{
                fill: '#52555F',
                fontSize: '12px',
                fontFamily: 'Roboto',
                fontWeight: 400,
                lineHeight: '14px',
              }}
            />
          }
          fontSize={12}
          color={'#52555F'}
        />
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
