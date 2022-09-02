import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';
import s from './AppBar.module.css';
import logo from '../../../../images/icons/logo.svg';
import { LogoutBtn } from '../../../LogoutBtn/LogoutBtn';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export function AppBar() {
  const location = useLocation()
  
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <img src={logo} alt="Logo" className={s.logo} />

        {location.pathname !== '/' && isLoggedIn && <LogoutBtn />}
        {/* 
        {isLoggedIn && <LogoutBtn />}
        <LogoutBtn /> */}
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

