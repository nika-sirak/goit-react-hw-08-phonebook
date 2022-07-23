import axios from 'axios';

export const registerUser = async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    return data;
  } catch (error) {
    throw error;
  }
};
