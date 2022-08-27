import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className={s.kapusta}>
          Kapusta
        </NavLink>
      </nav>
    </>
  );
};
export default Navigation;
