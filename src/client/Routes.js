import Home from "./components/Home";
import UsersList, { load } from "./components/UsersList";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    load,
    path: "/users",
    component: UsersList
  }
];
