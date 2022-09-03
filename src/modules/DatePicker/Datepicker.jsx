import styles from './Datepicker.module.css';
import 'antd/dist/antd.min.css';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import { ReactComponent as Logo } from '../../images/icons/calendar.svg';
import './DatePicker.css';

const onChange = (date, dateString) => {
  console.log(dateString);
};

const Datepicker = () => (
  <Space direction="vertical">
    <DatePicker
      defaultValue={moment()}
      onChange={onChange}
      allowClear={false}
      format={'YYYY-M-D'}
      className={styles.input}
      suffixIcon={<Logo />}
    />
  </Space>
);

export default Datepicker;
