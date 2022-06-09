import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import s from './App.module.css'


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  
  addContacts = ({name,number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number
    }
    const contactInList = this.state.contacts.find(({name}) =>
      name.toLocaleLowerCase().includes(contact.name.toLocaleLowerCase()))
   
    contactInList
      ? alert(`${contact.name} is already in your list`) 
      : this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }))
  }
  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(({name}) =>
      name.toLocaleLowerCase().includes(normalizedFilter))
  }
  deleteContacts = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    
    return (
      <div className={s.app}>
        <div className={s.container}>
          <h1 className={s.title}>Phonebook </h1>
          <ContactForm onSubmit={this.addContacts} />
        </div>
        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList contacts={visibleContacts} onDeleteContacts={this.deleteContacts}/>
      </div>
  );
  }
}

export default App