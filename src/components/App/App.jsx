import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './App.module.css';

const LS_KEY = 'contacts';

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_KEY))
  );
  const [filtered, setFiltered] = useState('');

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const contactInList = contacts.find(({ name }) =>
      name.toLocaleLowerCase().includes(contact.name.toLocaleLowerCase())
    );

    setContacts(prevState => [...prevState, contact]);

    contactInList
      ? alert(`${contact.name} is already in your list`)
      : setContacts([...contacts, contact]);
  };

  const changeFilter = e => {
    setFiltered(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filtered.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={s.app}>
      <div className={s.container}>
        <h1 className={s.title}>Phonebook </h1>
        <ContactForm onSubmit={addContacts} />
      </div>

      <h2>Contacts</h2>
      <Filter value={filtered} onChangeFilter={changeFilter} />
      <ContactList
        contactsArr={getVisibleContacts()}
        onDeleteContacts={deleteContacts}
      />
    </div>
  );
}

export default App;
