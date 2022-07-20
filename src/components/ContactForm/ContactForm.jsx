import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import s from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};

function ContactForm() {
  const contacts = useSelector(contactsSelectors.getItems);
  const [form, setForm] = useState(INITIAL_STATE);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contactInList = contacts.find(({ name }) =>
      name.toLocaleLowerCase().includes(form.name.toLocaleLowerCase())
    );

    contactInList
      ? toast.warning(`${form.name} is already in your list`)
      : dispatch(contactsOperations.addContacts(form));

    setForm(INITIAL_STATE);
  };

  const { name, phone } = form;

  return (
    <form className={s.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={s.field}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={s.field}>
        Number
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={s.btnForm} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
