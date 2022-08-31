import { NavLink } from 'react-router-dom';
import s from './buttonGoMain.module.css';

export const ButtonGoMain = () => {
  return (
    <NavLink to={'/home'} className={s.buttonLink}>
      <button type="button" className={s.buttonGoBack}>
        <svg
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z"
            fill="#FF751D"
          />
        </svg>
      </button>
      <p className={s.buttonText}>Main page</p>
    </NavLink>
  );
};
