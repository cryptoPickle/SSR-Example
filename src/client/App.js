import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import loadData from './utils/loadData';
import { fetchCurrentUser } from './Redux/actions';

const App = ({ route }) => (
  <Fragment>
    <Header />
    {renderRoutes(route.routes)}
  </Fragment>
);

export default {
  component: App,
  load: loadData(fetchCurrentUser)
};
