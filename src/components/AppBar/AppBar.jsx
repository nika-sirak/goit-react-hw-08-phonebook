import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as authSelectors from 'redux/auth/auth-selectors';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import s from './AppBar.module.css';
function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <nav className={s.nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
}

export default AppBar;
