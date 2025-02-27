import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./pages/posts/post-list.tsx"
import UserList from "./pages/user-list/user-list.tsx";
import PostShow from "./pages/posts/post-show.tsx";
import UserShow from "./pages/user-list/user-show.tsx";
import PostEdit from "./pages/posts/post-edit.tsx";
import PostCreate from "./pages/posts/post-create.tsx";
import ArticleIcon from "@mui/icons-material/Article";
import PersonIcon from "@mui/icons-material/Person";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource icon={ArticleIcon} name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate}/>
    <Resource icon={PersonIcon} name="users" list={UserList} show={UserShow}/>
  </Admin>
);
