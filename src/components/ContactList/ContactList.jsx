import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import s from './ContactList.module.css';

function ContactList() {
  const loading = useSelector(contactsSelectors.getLoader);
  const error = useSelector(contactsSelectors.getError);
  const dispatch = useDispatch();
  const visibleContacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContacts = id =>
    dispatch(contactsOperations.deleteContacts(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {visibleContacts.length > 0 && (
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
      )}
    </>
  );
}

export default ContactList;
