import { Formik } from 'formik';
import s from './AuthForm.module.css';
import google from '../../images/icons/google.svg';

export default function AuthForm({ email, password, handleChange }) {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validate={values => {
          let errors = {};
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          values.email = email;
          values.password = password;
          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!regex.test(values.email)) {
            errors.email = 'Invalid Email';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          } else if (values.password.length < 8) {
            errors.password = 'Password too short';
          }
          return errors;
        }}
      >
        {formik => {
          const { errors, touched, handleBlur, isValid, dirty } = formik;
          return (
            <form className={s.form}>
              <h2 className={s.title}>
                You can log in with your Google Account:
              </h2>
              <a href={`${process.env.REACT_APP_BASE_API_URL}/auth/google`}>
                <img className={s.googleImage} src={google} alt="google" />
              </a>
              <div className={s.p}>
                <label className={s.label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? s.input_error : s.input
                  }
                />
                {errors.email && touched.email && (
                  <span className={s.error}>{errors.email}</span>
                )}
              </div>

              <div className={s.p}>
                <label className={s.label} htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password
                      ? s.input_error
                      : s.input
                  }
                />
                {errors.password && touched.password && (
                  <span className={s.error}>{errors.password}</span>
                )}
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
