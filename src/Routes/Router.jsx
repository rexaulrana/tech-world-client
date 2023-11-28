import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Products from "../pages/products/Products";
import Login from "../pages/Login/Login";

import ProductDetails from "../pages/Home/FeaturedProducts/ProductDetails";
import Reviews from "../pages/Home/FeaturedProducts/Reviews";
import Report from "../pages/Home/FeaturedProducts/Report";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            {" "}
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("http://localhost:5000/features"),
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/report",
        element: <Report></Report>,
      },
    ],
  },
]);

export default Router;
