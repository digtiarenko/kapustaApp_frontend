import { useState } from 'react';
import authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import AuthForm from '../AuthForm/AuthForm';
import { Button } from '../Button/Button';
import s from './AuthComponen.module.css';

export default function Component() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

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
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  const handleRegister = e => {
    e.preventDefault();
    dispatch(authOperations.register({ email, password }));
    reset();
  };

  const handleLogin = e => {
    e.preventDefault();
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
          />
          <ul className={s.list}>
            <li className={s.item}>
              <Button
                theme={'orangeTheme'}
                text={'Login'}
                type={'submit'}
                disabled={disabled}
                onClicked={handleLogin}
              />
            </li>
            <li className={s.item}>
              <Button
                theme={'orangeTheme'}
                text={'Sign up'}
                type={'submit'}
                disabled={disabled}
                onClicked={handleRegister}
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
