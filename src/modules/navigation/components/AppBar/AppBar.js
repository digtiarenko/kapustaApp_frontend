import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';
import s from './AppBar.module.css';
import logo from '../../../../images/icons/logo.svg';
import { LogoutBtn } from '../../../LogoutBtn/LogoutBtn';
// import getIsLoggedIn from '../../../../redux/auth/auth-operations';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <img src={logo} alt="Logo" className={s.logo} />
        {/* {isLoggedIn  */}
        {/* && */}
        <LogoutBtn />
        {/* } */}
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
