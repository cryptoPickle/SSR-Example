import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import renderer from './utils/renderer';
import Routes from './client/Routes';
import createStore from './utils/createStore';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    }
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.load ? route.load(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const staticContext = {};
    const content = renderer(Routes, req, store, staticContext);
    if (staticContext.notFound) {
      return res.status(404).send(content);
    }
    if (staticContext.url) {
      return res.redirect(301, staticContext.url);
    }
    res.send(content);
  });
});

app.listen(3000, () => console.log('Listening 3000'));
