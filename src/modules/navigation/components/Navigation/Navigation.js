import '../../../../css/App.css';

import { LogoutBtn } from '../../../LogoutBtn/LogoutBtn';

// import { authSelectors } from '../../../../redux/auth/auth-selectors';

import { useSelector } from 'react-redux';

const Navigation = () => {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <nav>
        {/* {isLoggedIn ? <UserMenuHeader /> : <LogoutBtn />} */}

        {/* { isLoggedIn && <LogoutBtn />} */}
      </nav>
      {/* </header> */}
    </>
  );
};
export default Navigation;
