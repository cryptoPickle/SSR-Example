import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default () => {
  return createStore(reducers, {}, applyMiddleware(thunk));
};
