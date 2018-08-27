import { FETCH_USERS } from '../actions';

const initialstate = {
  userList: []
};

export default (state = initialstate, { type, payload }) => {
  switch (type) {
    case FETCH_USERS:
      return { ...state, userList: payload };
    default:
      return state;
  }
};
