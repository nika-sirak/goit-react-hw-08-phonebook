import { useSelector, useDispatch } from 'react-redux';
import {
  getItems,
  getFilter,
  getVisibleContacts,
} from '../redux/contacts/contacts-selectors';
import {
  addContacts,
  deleteContacts,
  filterContacts,
} from '../redux/contacts/contacts-action';

export const useContactForm = () => {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();
  const onAddContacts = cont => dispatch(addContacts(cont));

  return {
    contacts,
    addContacts: onAddContacts,
  };
};

export const useContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(deleteContacts(id));

  return {
    visibleContacts,
    deleteContacts: onDeleteContacts,
  };
};

export const useFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterContacts = value => dispatch(filterContacts(value));

  return {
    value,
    filterContacts: onFilterContacts,
  };
};
