import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../admin/views/Home";
import Panel from "../admin/views/Panel";
import CategoryCreate from "../admin/views/CategoryCreate";
import Category from "../admin/views/Category";
import Size from "../admin/views/Size";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin/inicio",
    element: <Home />,
  },
  {
    path: "/admin/panel",
    element: <Panel />,
  },
  {
    path: "/admin/crear-categoria",
    element: <CategoryCreate />,
  },
  {
    path: "/admin/categoria/:category_id/:category_name",
    element: <Category />,
  },
  {
    path: "/admin/crear-talle/:category_id/:category_name",
    element: <Size />,
  },
]);

export default router