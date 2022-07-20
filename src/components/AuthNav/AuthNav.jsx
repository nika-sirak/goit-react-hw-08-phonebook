import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <>
      <NavLink to="/login">Log in</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
    </>
  );
}

export default AuthNav;
