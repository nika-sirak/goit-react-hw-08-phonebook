import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { filterContacts } from 'redux/contacts/contacts-actions';

export const useFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onFilterContacts = value => dispatch(filterContacts(value));

  return {
    value,
    filterContacts: onFilterContacts,
  };
};
