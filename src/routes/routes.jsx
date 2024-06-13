import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard/Dashboard";
import DashboardLaout from "../Layouts/DashboardLaout";
import MyCourses from "../components/Dashboard/MyCourses/MyCourses";
import AddCourse from "../components/Dashboard/AddCourse/AddCourse";
import MainLayout from "../Layouts/MainLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
  {
    path: "/dashboard",
    element: <DashboardLaout />,
    children: [
      {
        index: 0,
        element: <Dashboard />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
