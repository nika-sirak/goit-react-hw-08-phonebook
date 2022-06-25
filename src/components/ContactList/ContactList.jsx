import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactList({ contactsArr, onDeleteContacts }) {
  return (
    <ul className={s.contactList}>
      {contactsArr.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
