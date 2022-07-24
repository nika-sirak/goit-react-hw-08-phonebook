import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import s from './Navigation.module.css';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <NavLink
        to="/"
        className={navData => (navData.isActive ? s.activeLink : s.navLink)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={navData => (navData.isActive ? s.activeLink : s.navLink)}
        >
          Contacts
        </NavLink>
      )}
    </>
  );
}

export default Navigation;
