import { NavLink } from 'react-router-dom';

import style from '../AuthNav/AuthNav.module.css';

export default function AuthNav() {
  return (
    <>
      <nav>
        <div className="container">
          <button type="button" className="btn">
            <NavLink
              to={'/login'}
              className={({ isActive }) =>
                isActive ? style.activeStyle : style.navLink
              }
            >
              Login
            </NavLink>
          </button>
          <button type="button" className="btn btn-info me-3">
            <NavLink
              to={'/register'}
              className={({ isActive }) =>
                isActive ? style.activeStyle : style.navLink
              }
            >
              Sign up for free
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
}
