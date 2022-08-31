import s from './LogoutBtn.module.css';
import logoutIcon from '../../images/icons/logout.svg';
import { Button } from '../Buttons/Button';
import Modal from '../Modal/Modal';
import React, { useState } from 'react';

// import { getUserEmail } from '../../redux/login/auth-selectors';

// import { fetchLogout } from '../../redux/login/auth-operations';
// import { useDispatch, useSelector } from 'react-redux';

const LogoutBtn = () => {
  // const [showModal, setShowModal] = useState(false);

  // const dispatch = useDispatch();
  // const email = useSelector(getUserEmail);
  // const userName = email[0].toUpperCase() + email.slice(1).split('@')[0];

  // const logout = () => {
  //   dispatch(fetchLogout());
  // };

  return (
    <div className={s.container}>
      {/* {showModal && ( */}
      {/* <Modal
        onDeny={() => {
          setShowModal(false);
        }}
        handleAgreeButtonClick={logout}
        question="Are you sure?"
      />
       */}
      <span className={s.avatar}>{/* {email[0]} */}</span>

      <p className={s.name}>{/* {userName} */}Name</p>

      <button
        onClick={() => {
          // setShowModal(true);
        }}
        className={s.btn}
        type="button"
      >
        <span className={s.logout}>Exit</span>
        <img src={logoutIcon} alt="logout button" className={s.logoutIcon} />
      </button>
    </div>
  );
};

export { LogoutBtn };
