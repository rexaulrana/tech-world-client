import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Products from "../pages/products/Products";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signup/SignUp";
import ProductDetails from "../pages/Home/FeaturedProducts/ProductDetails";

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
        path: "products",
        element: <Products></Products>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "features/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default Router;
