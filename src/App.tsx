import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { loginRoutes } from './modules/login/routes';
import { useNotification } from './shared/components/hooks/useNotification';

export const mainRouter: RouteObject[] = [
  {
    path: '/',
    element: <div>Pagina princial</div>,
    errorElement: <div>Not Found</div>,
  },
];

const router = createBrowserRouter([...loginRoutes, ...mainRouter]);

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
