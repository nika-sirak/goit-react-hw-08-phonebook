import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from 'redux/auth/auth-selectors';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Outlet />
    </nav>
  );
}

export default AppBar;
