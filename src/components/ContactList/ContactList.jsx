import { useContactList } from '../../hooks/contactsHooks';
import s from './ContactList.module.css';

function ContactList() {
  const { visibleContacts, deleteContacts } = useContactList();

  return (
    <ul className={s.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactItem}>
          <span>{name} : </span>
          <span>{number}</span>
          <button
            className={s.btnList}
            type="button"
            onClick={() => deleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
