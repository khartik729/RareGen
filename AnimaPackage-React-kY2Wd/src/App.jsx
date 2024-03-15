import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./screens/Homepage";
import { OurTeam } from "./screens/OurTeam";
import { ReDirect } from "./screens/ReDirect";
import { Login } from "./screens/Login";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Homepage />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/our-team",
    element: <OurTeam />,
  },
  {
    path: "/re-direct",
    element: <ReDirect />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
