import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from './contacts/contacts-reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      logger,
    }),

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
