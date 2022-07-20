import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-reducers';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      logger,
    }),

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
