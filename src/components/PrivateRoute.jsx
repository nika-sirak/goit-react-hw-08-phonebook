import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as authSelectors from 'redux/auth/auth-selectors';

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
