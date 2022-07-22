import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';
import s from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div className={s.userMenuContainer}>
      <span className={s.userName}>Wellcome {name}</span>
      <button
        className={s.userLogOutBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
