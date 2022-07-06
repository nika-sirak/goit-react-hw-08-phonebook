import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filtered = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const onDeleteContacts = id => dispatch(actions.deleteContacts(id));

  const getVisibleContacts = () => {
    const normalizedFilter = filtered.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ul className={s.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <span>{name} : </span>
          <span>{number}</span>
          <button
            className={s.btnList}
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactList.propTypes = {
//   contactsArr: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContacts: PropTypes.func,
// };

export default ContactList;
