import AuthComponen from '../../modules/AuthComponen/AuthComponent';

import Dropdown from '../../modules/dropDownCategories/Dropdown';

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
            <Dropdown />
          </div>
          <div className={s.form}>
            <AuthComponen />
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
