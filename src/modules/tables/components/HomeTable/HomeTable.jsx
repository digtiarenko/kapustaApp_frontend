import { useDispatch, useSelector } from 'react-redux';
import { getFields } from 'redux/table/tableFormSelectors';
import { deleteField } from 'redux/table/tableSlice';

const tableHeaders = ['DATE', 'DESCRIPTION', 'CATEGORY', 'SUM', ''];

const HomeTable = () => {
  const fields = useSelector(getFields);
  const dispatch = useDispatch();
  const handleDeleteField = id => dispatch(deleteField(id));

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {fields.map(({ id, date, description, category, sum }) => (
            <tr key={id}>
              <td>{date}</td>
              <td>{description}</td>
              <td>{category}</td>
              <td>{sum}</td>
              <td>
                <button onClick={() => handleDeleteField(id)} type="button">
                  DEl
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
