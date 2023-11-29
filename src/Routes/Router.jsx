import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Products from "../pages/products/Products";
import Login from "../pages/Login/Login";

import FeaturedProductDetails from "../pages/Home/FeaturedProducts/FeaturedProductDetails";
import Reviews from "../pages/Home/FeaturedProducts/Review/Reviews";
import Report from "../pages/Home/FeaturedProducts/Report";
import Registration from "../pages/registration/Registration";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../pages/Home/FeaturedProducts/Review/AddReview";
import ProductDetails from "../pages/products/ProductDetails";
import ErrorPage from "../components/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
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
        path: "/featuredProduct/:id",
        element: (
          <PrivateRoute>
            <FeaturedProductDetails></FeaturedProductDetails>,
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/features"),
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoute>
            <Reviews></Reviews>,
          </PrivateRoute>
        ),
      },
      {
        path: "/report",
        element: (
          <PrivateRoute>
            <Report></Report>,
          </PrivateRoute>
        ),
      },
      {
        path: "/addReview/:id",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/products"),
      },
    ],
  },
]);

export default Router;
