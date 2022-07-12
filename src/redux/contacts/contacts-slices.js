import { combineReducers, createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  filterContacts,
} from './contacts-actions';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [addContacts]: (state, { payload }) => [...state, payload],
    [deleteContacts]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: {
    [filterContacts]: (_, { payload }) => payload,
  },
});

const items = itemsSlice.reducer;
const filter = filterSlice.reducer;

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;

// const items = createReducer([], {
//   [addContacts]: (state, {payload}) => [...state, payload],
//   [deleteContacts]: (state, {payload}) => {
//     return state.filter(item => item.id !== payload);
//   },
// });
// const filter = createReducer('', {
//   [filterContacts]: (_, {payload}) => payload,
// });
