import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../admin/views/Home";
import Panel from "../admin/views/Panel";
import CategoryCreate from "../admin/views/CategoryCreate";
import Category from "../admin/views/Category";
import Size from "../admin/views/Size";
import ProductCreate from "../admin/views/ProductCreate";
import Products from "../admin/views/Products";
import MethodPayment from "../admin/views/MethodPayment";


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
    path: "/admin/crear-producto/:category_id/:category_name",
    element: <ProductCreate />,
  },
  {
    path: "/admin/categoria/:category_id/:category_name",
    element: <Category />,
  },
  {
    path: "/admin/crear-talle/:category_id/:category_name",
    element: <Size />,
  },
  {
    path: "/admin/products/:category_id/:size_id/:category_name/:size_name",
    element: <Products />,
  },
  {
    path: "/admin/productsLoad/:category_id/:size_id/:category_name/:size_name/:product_id",
    element: <MethodPayment />,
  },
]);

export default router