import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

function AppBar() {
  return (
    <nav>
      <Navigation />
      {true ? <AuthNav /> : <UserMenu />}
      <Outlet />
    </nav>
  );
}

export default AppBar;
