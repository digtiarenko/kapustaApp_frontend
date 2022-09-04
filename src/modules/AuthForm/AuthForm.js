import { Formik, Form } from 'formik';
import { Button } from '../Buttons/Button';
import s from './AuthForm.module.css';
import google from '../../images/icons/google.svg';

export default function AuthForm({
  email,
  password,
  handleChange,
  handleRegister,
  handleLogin,
  validate,
  disabled,
  submitError,
}) {
  const getStyledButton = disabled => {
    switch (disabled) {
      case false:
        return 'orangeTheme';
      case true:
        return 'whiteTheme';
      default:
        return;
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={validate}
      >
        {formik => {
          const { errors, touched, handleBlur } = formik;
          return (
            <Form className={s.form}>
              <h2 className={s.form__title}>
                You can log in with your Google Account:
              </h2>
              <a
                className={s.googleImage__bachground}
                href={`${process.env.REACT_APP_BASE_API_URL}/auth/google`}
              >
                <img className={s.googleImage} src={google} alt="google" />
              </a>
              <h2 className={s.form__title}>
                Or log in using an email and password, after registering:
              </h2>
              <div className={s.form_field}>
                <label className={s.form__label} htmlFor="email">
                  Email:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    (errors.email && touched.email) || submitError
                      ? s.form__input_error
                      : s.form__input
                  }
                />
                {errors.email && touched.email && (
                  <span className={s.form__error}>{errors.email}</span>
                )}
                {submitError && (
                  <span className={s.form__error}>Email is required</span>
                )}
              </div>

              <div className={s.form_field}>
                <label className={s.form__label} htmlFor="password">
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    (errors.password && touched.password) || submitError
                      ? s.form__input_error
                      : s.form__input
                  }
                />
                {errors.password && touched.password && (
                  <span className={s.form__error}>{errors.password}</span>
                )}
                {submitError && (
                  <span className={s.form__error}>Password is required</span>
                )}
              </div>
              <ul className={s.form__list}>
                <li className={s.form__item}>
                  <Button
                    theme={getStyledButton(disabled)}
                    text={'Sign in'}
                    type={'submit'}
                    disabled={disabled}
                    onClick={handleLogin}
                  />
                </li>
                <li className={s.form__item}>
                  <Button
                    theme={getStyledButton(disabled)}
                    text={'Sign up'}
                    type={'submit'}
                    disabled={disabled}
                    onClick={handleRegister}
                  />
                </li>
              </ul>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
