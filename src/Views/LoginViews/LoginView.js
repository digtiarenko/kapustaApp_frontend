import { useState } from 'react';
import { logIn } from '../../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import s from './LoginViews.module.css';
import google from '../../images/icons/google.svg';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  //client_id:  132936057078-2eg0113viub8h795ojjffc9o6cg9m3nf
  //client_secret :  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

  return (
    <>
      <form className={s.formLogin} onSubmit={handleSubmit}>
        <h2 className={s.titleLogin}>
          You can log in with your Google Account:
        </h2>
        <img className={s.googleImage} src={google} alt="google" />
        <p className={s.p}>
          <label className={s.labelLogin} htmlFor="email">
            Email
          </label>
          <input
            className={s.inputLogin}
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </p>

        <p className={s.p}>
          <label className={s.labelLogin} htmlFor="password">
            Password
          </label>
          <input
            className={s.inputLogin}
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
          <span className={s.spanLogin}>
            Enter a password longer than 8 characters
          </span>
        </p>

        <p className={s.p}>
          <button className={s.buttonLogin} type="submit">
            Enter
          </button>
        </p>
      </form>
    </>
  );
}
