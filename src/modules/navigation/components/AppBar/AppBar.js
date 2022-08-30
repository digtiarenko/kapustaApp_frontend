import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Container from '../Container';
import s from './AppBar.module.css';
import logo from '../../../../images/icons/logo.svg';
// import { LogoutBtn } from '../../../LogoutBtn/LogoutBtn';

export default function AppBar() {
  return (
    <>
      <Container>
        <header className={s.header}>
          <img src={logo} alt="Logo" className={s.logo} />
          {/* <LogoutBtn /> */}
          <Navigation />
        </header>

        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}
