import { ToastContainer, Flip } from 'react-toastify';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';
import s from './ContactsPage.module.css';

function ContactsPage() {
  return (
    <section className={s.phonebookSection}>
      <div className={s.formContainer}>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          transition={Flip}
        />
        <h1 className={s.title}>Phonebook </h1>
        <ContactForm />
      </div>
      <div className={s.contactsContainer}>
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
}

export default ContactsPage;
