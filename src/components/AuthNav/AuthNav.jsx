import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

function AuthNav() {
  return (
    <div className={s.authNavContainer}>
      <NavLink
        to="/login"
        className={navData => (navData.isActive ? s.activeLink : s.navLink)}
      >
        Log in
      </NavLink>
      <NavLink
        to="/register"
        className={navData => (navData.isActive ? s.activeLink : s.navLink)}
      >
        Sign Up
      </NavLink>
    </div>
  );
}

export default AuthNav;
