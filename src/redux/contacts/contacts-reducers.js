import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  filterContacts,
} from './contacts-actions';

const items = createReducer([], {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContacts]: (state, { payload }) => {
    return state.filter(item => item.id !== payload);
  },
});
const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;

// const initialState = {
//   items: [],
//   filter: '',
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   extraReducers: {
//     [addContacts]: (state, { payload }) => {
//       state.items.push(payload);
//     },
//     [deleteContacts]: (state, { payload }) =>
//       state.items.filter(({ id }) => id !== payload),
//     [filterContacts]: (state, { payload }) => (state.filter = payload),
//   },
// });
