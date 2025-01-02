import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./private/PrivateRoute";
import Overview from "../Pages/dashboard/Overview";
import SellerRoute from "./private/SellerRoute";
import MyProducts from "../components/dashboard/seller/MyProducts";
import AddProducts from "../components/dashboard/seller/AddProducts";
import BuyerRoute from "./private/BuyerRoute";
import MyWishlist from "./../Pages/dashboard/buyer/MyWishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />,
      },

      // Buyer routes
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <MyWishlist />
          </BuyerRoute>
        ),
      },

      // seller routes
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
    ],
  },
]);
