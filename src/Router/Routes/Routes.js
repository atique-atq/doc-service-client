import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Appointment from "../../Pages/Appointment/Appointment";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/Home/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import NoPageFound from "../../Pages/Shared/NoPageFound/NoPageFound";
import SignUp from "../../Pages/SignUp/SignUp";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/appointment',
        element: <Appointment></Appointment>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/allServices',
        loader: () => fetch('http://localhost:5001/services'),
        element: <AllServices></AllServices>
      },
      {
        path: '/service/:serviceId',
        loader: ({ params }) => fetch(`http://localhost:5001/service/${params.serviceId}`),
        element: <ServiceDetail></ServiceDetail>
      },
      {
        path: '/myReviews',
        element: <PrivateRoute> <MyReviews></MyReviews></PrivateRoute>,
      },
      {
        path: '/addService',
        element: <PrivateRoute> <AddService></AddService> </PrivateRoute>,
      },
      {
        path: '/updateReview/:serviceId',
        loader: ({ params }) => fetch(`http://localhost:5001/review/${params.serviceId}`),
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: '*',
        element: <NoPageFound></NoPageFound>
      }
    ]
  }
]);

export default router;