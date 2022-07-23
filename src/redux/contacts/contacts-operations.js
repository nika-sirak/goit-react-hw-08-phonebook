import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const phonebook = await API.fetchContacts();
      return phonebook;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const phonebook = await API.addContacts(contact);
      toast.success('Added Successfully');
      return phonebook;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const contacts = await API.deleteContacts(id);
      toast.success('Deleted Successfully');
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
