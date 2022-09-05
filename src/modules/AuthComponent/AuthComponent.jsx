import { useState } from 'react';
import authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import AuthForm from '../AuthForm/AuthForm';
import s from './AuthComponent.module.css';

export default function AuthComponent() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorsSubmit, setErrorsSubmit] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setErrorsSubmit({ email: '', password: '' });
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  const validateByFormik = values => {
    let errors = {};
    values.email = email;
    values.password = password;
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password too short';
    }
    return errors;
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleRegister = e => {
    e.preventDefault();
    if (email === '' && password === '') {
      setErrorsSubmit({ email: 'required', password: 'required' });
      return;
    } else if (email === '' && password.length < 8) {
      setErrorsSubmit({ email: 'required', password: 'wrong' });
      return;
    } else if (!regex.test(email) && password === '') {
      setErrorsSubmit({ email: 'wrong', password: 'required' });
      return;
    } else if (!regex.test(email) && password.length < 8) {
      setErrorsSubmit({ email: 'wrong', password: 'wrong' });
      return;
    } else if (email === '') {
      setErrorsSubmit({ email: 'required', password: '' });
      return;
    } else if (!regex.test(email)) {
      setErrorsSubmit({ email: 'wrong', password: '' });
      return;
    } else if (password === '') {
      setErrorsSubmit({ email: '', password: 'required' });
      return;
    } else if (password.length < 8) {
      setErrorsSubmit({ email: '', password: 'wrong' });
      return;
    }
    dispatch(authOperations.register({ email, password }));
    reset();
  };

  const handleLogin = e => {
    e.preventDefault();
    if (email === '' && password === '') {
      setErrorsSubmit({ email: 'required', password: 'required' });
      return;
    } else if (email === '' && password.length < 8) {
      setErrorsSubmit({ email: 'required', password: 'wrong' });
      return;
    } else if (!regex.test(email) && password === '') {
      setErrorsSubmit({ email: 'wrong', password: 'required' });
      return;
    } else if (!regex.test(email) && password.length < 8) {
      setErrorsSubmit({ email: 'wrong', password: 'wrong' });
      return;
    } else if (email === '') {
      setErrorsSubmit({ email: 'required', password: '' });
      return;
    } else if (!regex.test(email)) {
      setErrorsSubmit({ email: 'wrong', password: '' });
      return;
    } else if (password === '') {
      setErrorsSubmit({ email: '', password: 'required' });
      return;
    } else if (password.length < 8) {
      setErrorsSubmit({ email: '', password: 'wrong' });
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
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
            validateByFormik={validateByFormik}
            errorsSubmit={errorsSubmit}
          />
        </div>
      </nav>
    </>
  );
}
