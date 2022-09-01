import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const Datepicker = () => (
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
);

export default Datepicker;
