import DashboardIcon from "@material-ui/icons/Dashboard";
import MainPage from "../view/MainPage"
import BlogPage from "../view/BlogPage";
import WidgetsIcon from "@material-ui/icons/Widgets";

let mainRoutes = [


  {
    path: "/",
    name: "Main",
    icon: DashboardIcon,
    component: MainPage,
  },

  {
    path: "/blog",
    name: "Blog",
    icon: "WidgetsIcon",
    component: BlogPage,
  },

  // {redirect: true, path: "/", pathTo: "/main", name: "Main"}
];

export default mainRoutes;
