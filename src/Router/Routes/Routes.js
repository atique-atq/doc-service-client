import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Appointment from "../../Pages/Appointment/Appointment";
import FAQ from "../../Pages/Home/FAQ/FAQ";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NoPageFound from "../../Pages/Shared/NoPageFound/NoPageFound";
import SignUp from "../../Pages/SignUp/SignUp";

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
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/allServices',
        loader: () => fetch('http://localhost:5001/services'),
        element: <AllServices></AllServices>
      },
      {
        path: '*',
        element: <NoPageFound></NoPageFound>
      }
    ]
  }
]);

export default router;