import { useState } from 'react';
import { register } from '../../src/redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import {
  Form,
  Label,
  Input,
  ButtonEnter,
  Span,
  P,
} from '../styles/LoginViews.styles';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <P>
        <Label htmlFor="name" className="floatLabel">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="name"
          value={name}
          onChange={handleChange}
        />
      </P>
      <P>
        <Label htmlFor="email" className="floatLabel">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </P>

      <P>
        <Label htmlFor="password" className="floatLabel">
          Password
        </Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <Span>Enter a password longer than 8 characters</Span>
      </P>

      <P>
        <ButtonEnter type="submit">Create My Account</ButtonEnter>
      </P>
    </Form>
  );
}
