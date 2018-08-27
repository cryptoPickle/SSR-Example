import App from './App';
import Home from './Pages/Home';
import UsersList from './Pages/UsersList';
import NotFound from './Pages/NotFound';
import AdminsList from './Pages/AdminsList';
export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...UsersList,
        path: '/users'
      },
      {
        ...AdminsList,
        path: '/admins'
      },
      {
        ...NotFound
      }
    ]
  }
];
