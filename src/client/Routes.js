import Home from "./Pages/Home";
import UsersList from "./Pages/UsersList";

export default [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...UsersList,
    path: "/users"
  }
];
