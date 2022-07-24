import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  MdOutlinePersonOutline,
  MdAlternateEmail,
  MdPassword,
} from 'react-icons/md';
import { authOperations } from 'redux/auth';
import s from './RegisterPage.module.css';

function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <section className={s.loginSection}>
      <h2 className={s.title}>Not a customer yet? Join now!</h2>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.field}>
          <span className={s.label}>Name</span>
          <span className={s.inputWrapper}>
            <input
              className={s.input}
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <MdOutlinePersonOutline className={s.formIcon} />
          </span>
        </label>

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
          <span className={s.label}>Password</span>
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
          Sign in
        </button>
      </form>
    </section>
  );
}

export default RegisterPage;
