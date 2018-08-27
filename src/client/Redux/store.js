import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../Redux/reducers';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const logger = createLogger({
  timestamp: false,
  collapsed: true,
  diff: true
});

const store = () => {
  return createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(logger, thunk.withExtraArgument(axiosInstance))
  );
};

export default store;
