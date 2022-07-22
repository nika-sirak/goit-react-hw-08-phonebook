import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as authSelectors from 'redux/auth/auth-selectors';

function PublicRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to="/" replace /> : children;
}

export default PublicRoute;
