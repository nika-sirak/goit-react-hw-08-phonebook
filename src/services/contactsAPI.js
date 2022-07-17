import axios from 'axios';

axios.defaults.baseURL = 'https://62d1579bd4eb6c69e7db740e.mockapi.io';

const fetchContactsfromPhonebook = axios.create({
  baseURL: 'https://62d1579bd4eb6c69e7db740e.mockapi.io',
  method: 'get',
});

export const fetchContacts = async () => {
  const { data } = await fetchContactsfromPhonebook('/contacts');
  return data;
};

// const addContactsfromPhonebook = axios.create({
//   baseURL: 'https://62d1579bd4eb6c69e7db740e.mockapi.io',
//   method: 'post',
// });

export const addContacts = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
