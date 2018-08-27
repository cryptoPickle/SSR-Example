import { FETCH_CURRENT_USER } from '../actions';
import { Action } from 'rxjs/internal/scheduler/Action';

const initialState = {
  isLoggedIn: null,
  id: null,
  googleId: null
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CURRENT_USER:
      return payload
        ? { ...state, ...payload, isLoggedIn: true }
        : { isLoggedIn: false };
    default:
      return state;
  }
}
