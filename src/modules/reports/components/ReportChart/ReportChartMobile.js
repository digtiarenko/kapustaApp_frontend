import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
  YAxis,
} from 'recharts';
import EllipsisText from 'react-ellipsis-text';

import styles from './ReportChart.module.css';

const ReportChartMobile = ({ data }) => {
  const renderBarLabel = ({ x, y, width, value }) => {
    const labelText = value ? `${value} UAH` : '';
    return (
      width > 60 && (
        <text x={width} y={y} textAnchor="middle" fontSize={10} dx={0} dy={-10}>
          <EllipsisText text={labelText} length={'5'} />
        </text>
      )
    );
  };

  const renderCategoryLabel = ({ x, y, width, value }) => {
    return (
      <text x={x} y={y} dx={0} dy={-10} fontSize={10}>
        <EllipsisText text={value} length={'5'} />
      </text>
    );
  };

  return (
    <div className={styles.chartMobileWrapper}>
      <ResponsiveContainer height={50 * data.length}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: -30, bottom: 0, left: 0 }}
          barGap="5"
        >
          <XAxis hide axisLine={true} type="number" />
          <YAxis dataKey="description" type="category" hide />
          <Bar
            dataKey="value"
            barSize={15}
            radius={[0, 10, 10, 0]}
            label={renderBarLabel}
            fill="#52555f"
            minPointSize={10}
          >
            {data.map((el, idx) => (
              <Cell
                key={`cell-${idx}`}
                fill={idx % 3 ? '#FFDAC0' : '#ff751d'}
              />
            ))}
            <LabelList
              dataKey="description"
              content={renderCategoryLabel}
              fill="#52555F"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportChartMobile;
