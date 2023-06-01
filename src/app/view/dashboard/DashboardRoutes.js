
import { lazy } from 'react';


const Dashboard = lazy(() => import('./Dashboard'));

const dashboardRoutes = [
  { 
    path: '/dashboard',
   element: <Dashboard />, 
  // auth: authRoles.admin
 },
];

export default dashboardRoutes;
