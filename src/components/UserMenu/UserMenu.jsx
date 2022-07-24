import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
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
