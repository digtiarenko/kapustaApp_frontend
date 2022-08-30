import { NavLink } from 'react-router-dom';
import '../../../../css/App.css';
import { Button } from '../../../Buttons/Button';
import { LogoutBtn } from '../../../LogoutBtn/LogoutBtn';
// import s from './AppBar.module.css';
import logo from '../../../../images/icons/logo.svg';

const Navigation = () => {
  //  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {/* <header className="header"> */}
      <nav>
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        {/* <Navigation /> */}

        {/* { isLoggedIn && <LogoutBtn />} */}
        <LogoutBtn />
      </nav>
      {/* </header> */}
    </>
  );
};
export default Navigation;
