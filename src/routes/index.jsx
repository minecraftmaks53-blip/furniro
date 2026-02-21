import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import About from "../components/About";
import Blog from "../components/Blog";
import Shop from "../components/Shop";
import Cart from "../components/Cart";
import Home from "../components/Home";
import SingleProduct from "../components/SingleProduct";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "single-product", element: <SingleProduct /> }
    ]
  }
]);
