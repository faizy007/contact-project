

import { Navigate } from "react-router-dom";
import Navbar from "../app/components/Navbar";
import ContactRoutes from "./view/contact/ContactRoutes"
import DashboardRoutes from "./view/dashboard/DashboardRoutes"
const routes = [
  {
    element: (<Navbar />),
    children: [
      ...ContactRoutes,
      ...DashboardRoutes
    ],
  },
  { path: "/", element: <Navigate to="/contact" /> },
  // { path: "*", element: <NotFound /> },
];

export default routes;
