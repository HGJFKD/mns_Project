import {
  createBrowserRouter,
} from "react-router-dom";

import App from "../../../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/dashboard/home",
    element: <div>dashboard/home</div>,
  },
  {
    path: "/dashboard/profile",
    element: <div>dashboard/profile</div>,
  },
  {
    path: "/dashboard/features",
    element: <div>dashboard/features</div>,
  },
  {
    path: "/dashboard/revenue",
    element: <div>dashboard/revenue</div>,
  },
  {
    path: "/dashboard/analytics",
    element: <div>dashboard/analytics</div>,
  },
  {
    path: "/dashboard/calendar",
    element: <div>dashboard/calendar</div>,
  },
  {
    path: "/dashboard/wallets",
    element: <div>dashboard/wallets</div>,
  },
  {
    path: "/dashboard/contens/settings",
    element: <div>dashboard/contens/settings</div>,
  },
]);

export default router