import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../admin/views/Home";
import Panel from "../admin/views/Panel";
import Category from "../admin/views/Category";
import Size from "../admin/views/Size";
import ProductCreate from "../admin/views/ProductCreate";
import Products from "../admin/views/Products";
import DateSells from "../admin/views/DateSells";
import SellsDay from "../admin/views/SellsDay";
import HomePublic from "../admin/views/HomePublic";
import CategoryPublic from "../admin/views/CategoryPublic";
import ProductsPublic from "../admin/views/ProductsPublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePublic />
  },
  {
    path: "/admin",
    element: <Home />
  },
  {
    path: "/admin/panel",
    element: <Panel />,
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
    path: "/categoria/:category_id/:category_name",
    element: <CategoryPublic />,
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
    path: "/products/:category_id/:size_id/:category_name/:size_name",
    element: <ProductsPublic />,
  },
  {
    path: "/admin/dateSells",
    element: <DateSells />,
  },
  {
    path: "/admin/sells/:date",
    element: <SellsDay />,
  }
]);

export default router