import '../../../../css/App.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <>
      <div className="background-bottom"></div>
      <div className="background-top background-top_for-mobile"></div>
      <div className="container">{children}</div>;
    </>
  );
}

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Container;
