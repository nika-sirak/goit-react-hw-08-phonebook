import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span>Wellcome {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </button>
    </div>
  );
}

export default UserMenu;
