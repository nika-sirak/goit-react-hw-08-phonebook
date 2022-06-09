import PropTypes from 'prop-types'


function ContactList({contacts, onDeleteContacts}) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) =>
        <li key={id}>
          <span>{name} : </span>
          <span>{number}</span>
          <button type="button" onClick={() => onDeleteContacts(id)}>Delete</button>
        </li>)}
    </ul>
    )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContacts: PropTypes.func.isRequired
}
export default ContactList