import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  LabelList,
  YAxis,
  Tooltip,
} from 'recharts';

import styles from './ReportChart.module.css';

export const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className={styles.customTooltip}>
        <p
          className={styles.customTooltipLabel}
        >{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const ReportChartMobile = ({ data }) => {
  const renderBarLabel = ({ x, y, width, value }) => {
    const labelText = value ? `${value} UAH` : '';
    return (
      width > 60 && (
        <text x={width} y={y} textAnchor="middle" fontSize={10} dx={0} dy={-10}>
          {labelText}
        </text>
      )
    );
  };

  const renderCategoryLabel = ({ x, y, width, value }) => {
    let labelText = value;
    if (value.length > 8) {
      labelText = value.substr(0, 8) + '...';
    }
    return (
      <text x={x} y={y} dx={0} dy={-10} fontSize={10}>
        {labelText}
      </text>
    );
  };

  return (
    <div className={styles.chartMobileWrapper}>
      <ResponsiveContainer height={50 * data.length}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 0, right: -150, bottom: 0, left: 0 }}
          barGap="5"
        >
          <Tooltip cursor={false} content={<CustomTooltip />} />
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
            {data.map((item, idx) => (
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
