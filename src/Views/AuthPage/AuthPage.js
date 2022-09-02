import AuthComponent from '../../modules/AuthComponent/AuthComponent';

import React from 'react';

import s from './AuthPage.module.css';

function AuthPage() {
  return (
    <>
      <div className={s.backgroundElements}></div>
      <div className="background-top"></div>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.header}>
            <div className={s.logoName}></div>
            {/* <h1 className={s.logo}>Kapu$ta</h1> */}
            <p className={s.slogan}>smart finance</p>
          </div>
          <div className={s.form}>
            <AuthComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
