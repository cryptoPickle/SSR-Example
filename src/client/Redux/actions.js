import axios from 'axios';

const request = axios.create({
  baseURL: 'https://react-ssr-api.herokuapp.com'
});

export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch) => {
  const { data } = await request.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: data
  });
};
