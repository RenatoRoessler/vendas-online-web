import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';

export const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Pagina princial</div>,
    errorElement: <div>Not Found</div>,
  },
];

const router = createBrowserRouter([...loginRoutes, ...mainRouter]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
