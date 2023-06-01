
import { lazy } from 'react';


const Contact = lazy(() => import('./Contact'));

const contactRoutes = [
  { 
    path: '/contact',
   element: <Contact />, 
  // auth: authRoles.admin
 },
];

export default contactRoutes;
