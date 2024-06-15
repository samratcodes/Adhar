import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Medical from "./Pages/Medical.jsx";
import Travel from "./Pages/Travel.jsx";
import Recreational from "./Pages/Recreational.jsx";
import Workout from "./Pages/Workout.jsx";
import Dashbioard from "./Dashbioard.jsx";
import Profile from "./providerPage/Profile.jsx";
import DataSubmit from "./providerPage/DataSubmit.jsx";
import Jobs from "./providerPage/Jobs.jsx";
import Payment from "./providerPage/Payment.jsx";
import PaymentVerfication from "./AdminPage/PaymentVerfication.jsx";
import ProfileAdmin from "./AdminPage/ProfileAdmin.jsx";
import RecreationalAdmin from "./AdminPage/RecreationalAdmin.jsx";
import Admin from "./Admin.jsx";
import DoctorPage from "./Pages/DoctorPage.jsx";
import DietInput from "./AdminPage/DietInput.jsx";
import Landing from "./Pages/Landing.jsx";
import Premium from "./Pages/Premium.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "medical",
        element: <Medical />,
      },
      {
        path: "travel",
        element: <Travel />,
      },
      {
        path: "Recrartion",
        element: <Recreational />,
      },
      {
        path: "Niutrition",
        element: <Workout />,
      },
      {
        path:"doctor",
        element:<DoctorPage/>
      },{
        path:'landing',
        element:<Landing/>
      },{
        path:'premium',
        element:<Premium/>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashbioard />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "datasubmit",
        element: <DataSubmit />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "paymentadmin", element: <PaymentVerfication /> },
      {
        path: "profileadmin",
        element: <ProfileAdmin />,
      },
      {
        path: "recreationaladmin",
        element: <RecreationalAdmin />,
      },
      {
        path: "NutritionAdmin",
        element: <DietInput />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);
