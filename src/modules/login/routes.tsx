import { RouteObject } from 'react-router-dom';

import LoginScreen from '.';

export enum LoginRoutesEnum {
  LOGIN = '/login',
}

export const loginRoutes: RouteObject[] = [
  {
    path: LoginRoutesEnum.LOGIN,
    element: <LoginScreen />,
    errorElement: <div>Not Found</div>,
  },
];
