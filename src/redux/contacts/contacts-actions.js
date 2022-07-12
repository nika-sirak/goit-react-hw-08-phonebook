import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContacts = createAction(
  'contacts/addContacts',
  function prepare({ name, number }) {
    return {
      payload: {
        id: shortid.generate(),
        name,
        number,
      },
    };
  }
);

export const deleteContacts = createAction('contacts/deleteContacts');

export const filterContacts = createAction('contacts/filterContacts');
