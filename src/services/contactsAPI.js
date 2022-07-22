import axios from 'axios';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    throw error;
  }
};

export const addContacts = async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteContacts = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
