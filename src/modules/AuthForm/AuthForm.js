import s from './AuthForm.module.css';
import google from '../../images/icons/google.svg';

export default function AuthForm({ email, password, handleChange }) {
  return (
    <>
      <form className={s.formLogin}>
        <h2 className={s.titleLogin}>
          You can log in with your Google Account:
        </h2>
        <a href="http://localhost:5000/api/auth/google">
          <img className={s.googleImage} src={google} alt="google" />
        </a>
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

        <p className={s.p}></p>
      </form>
    </>
  );
}
