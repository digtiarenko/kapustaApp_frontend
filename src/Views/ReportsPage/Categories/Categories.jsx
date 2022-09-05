import { useParams } from 'react-router-dom';
import Expenses from '../Expenses/Expenses';
import Income from '../Income/Income';

const Categories = () => {
  const { type } = useParams();
  return type === 'expenses' ? <Expenses /> : <Income />;
};
export default Categories;
