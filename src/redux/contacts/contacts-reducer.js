import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, filterContacts } from './contacts-action';

const items = createReducer([], {
  [addContacts]: (state, action) => [...state, action.payload],
  [deleteContacts]: (state, action) => {
    return state.filter(item => item.id !== action.payload);
  },
});

const filter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
