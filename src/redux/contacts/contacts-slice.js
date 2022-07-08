import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, filterContacts } from './contacts-action';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: builder => {
    builder
      .addCase(addContacts, (state, action) => [...state, action.payload])
      .addCase(deleteContacts, (state, action) =>
        state.filter(item => item.id !== action.payload)
      );
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  extraReducers: builder => {
    builder.addCase(filterContacts, (_, action) => action.payload);
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
//   [addContacts]: (state, action) => [...state, action.payload],
//   [deleteContacts]: (state, action) => {
//     return state.filter(item => item.id !== action.payload);
//   },
// });
// const filter = createReducer('', {
//   [filterContacts]: (_, action) => action.payload,
// });
