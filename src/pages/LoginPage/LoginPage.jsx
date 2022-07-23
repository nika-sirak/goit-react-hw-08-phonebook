import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdAlternateEmail, MdPassword } from 'react-icons/md';
import * as authOperations from 'redux/auth/auth-operations';
import s from './LoginPage.module.css';

function LoginPage() {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <section className={s.loginSection}>
      <h2 className={s.title}>LOG IN</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.field}>
          <span className={s.label}>Email</span>
          <span className={s.inputWrapper}>
            <input
              className={s.input}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <MdAlternateEmail className={s.formIcon} />
          </span>
        </label>

        <label className={s.field}>
          <span className={s.label}> Password</span>
          <span className={s.inputWrapper}>
            <input
              className={s.input}
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <MdPassword className={s.formIcon} />
          </span>
        </label>

        <button className={s.btnForm} type="submit">
          Log in
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
