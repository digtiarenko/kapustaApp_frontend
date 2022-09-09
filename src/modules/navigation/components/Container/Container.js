import '../../../../css/App.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <>
      <div className="authBlock">
        <div className="background-bottom"></div>
        <div className="background-top background-top_for-mobile"></div>
        <div className="container">{children}</div>
      </div>
    </>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
