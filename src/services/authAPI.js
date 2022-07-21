import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    return data;
  } catch (error) {
    throw error;
  }
};
