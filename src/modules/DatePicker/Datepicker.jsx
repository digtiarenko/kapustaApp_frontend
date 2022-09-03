import styles from './Datepicker.module.css';
import 'antd/dist/antd.min.css';
import moment from 'moment';
import { DatePicker } from 'antd';
import { ReactComponent as Logo } from '../../images/icons/calendar.svg';
import './DatePicker.css';

const onChange = (date, dateString) => {
  console.log(dateString);
};

const Datepicker = () => (
  <DatePicker
    bordered={false}
    defaultValue={moment()}
    onChange={onChange}
    allowClear={false}
    format={'YYYY-M-D'}
    className={styles.input}
    suffixIcon={<Logo />}
  />
);

export default Datepicker;
