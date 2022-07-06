import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <div className={s.container}>
        <h1 className={s.title}>Phonebook </h1>
        <ContactForm />
      </div>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
