import { FETCH_ADMINS } from '../actions';

const initialState = {
  info: []
};

export default (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_ADMINS:
      return { ...state, info: payload };
    default:
      return state;
  }
};
