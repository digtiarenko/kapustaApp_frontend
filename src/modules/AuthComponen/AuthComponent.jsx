import { useState } from 'react';
import authOperations from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import AuthForm from '../AuthForm/AuthForm';

export default function Component() {
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
    console.log(email, password);
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <>
      <nav>
        <div className="container">
          <AuthForm
            email={email}
            password={password}
            handleChange={handleChange}
          />
          <ul>
            <li>
              <button type="submit" onClick={handleLogin} className="btn">
                Login
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={handleRegister}
                className="btn btn-info me-3"
              >
                Sign up for free
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
