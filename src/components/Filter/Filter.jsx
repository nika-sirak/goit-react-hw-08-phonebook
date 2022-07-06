import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-action';
import s from './Filter.module.css';

function Filter() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.filterField}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </label>
  );
}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };

export default Filter;
