import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger({
  timestamp: false,
  collapsed: true,
  diff: true
});

const store = () => {
  return createStore(reducers, {}, applyMiddleware(logger));
};

export default store;
