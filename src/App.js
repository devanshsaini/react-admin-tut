import * as React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import PostList from "./components/PostList";
import UserList from "./components/UserList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./components/Dashboard";
import authProvider from "./authProvider";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
