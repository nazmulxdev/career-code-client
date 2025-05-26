import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/LogIn/LogIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import LoadingSpinner from "../Components/LoadingSpinner";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/jobs/${params.id}`);
        },
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
    ],
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/logIn",
    Component: LogIn,
  },
]);

export default Router;
