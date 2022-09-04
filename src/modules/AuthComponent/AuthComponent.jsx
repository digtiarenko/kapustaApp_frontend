import { useState } from 'react';
import authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import AuthForm from '../AuthForm/AuthForm';
import s from './AuthComponent.module.css';

export default function AuthComponent() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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

  const validate = values => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    values.email = email;
    values.password = password;
    setSubmitError(false);
    if (!regex.test(values.email)) {
      errors.email = 'Invalid email';
    } else if (!values.email) {
      errors.email = 'Email is required';
    } else if (values.password.length < 7 && values.password.length > 0) {
      errors.password = 'Password too short';
    } else if (
      values.email &&
      regex.test(values.email) &&
      values.password &&
      values.password.length >= 7
    ) {
      setDisabled(false);
    }
    return errors;
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  const handleRegister = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setSubmitError(true);
      return;
    }
    dispatch(authOperations.register({ email, password }));

    reset();
  };

  const handleLogin = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setSubmitError(true);
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setDisabled(true);
    reset();
  };

  return (
    <>
      <nav>
        <div className={s.container}>
          <AuthForm
            email={email}
            password={password}
            handleChange={handleChange}
            handleRegister={handleRegister}
            handleLogin={handleLogin}
            disabled={disabled}
            validate={validate}
            submitError={submitError}
          />
        </div>
      </nav>
    </>
  );
}
