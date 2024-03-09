import { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstantes';
import { URL_USER } from '../../constants/urls';
import { connectionAPIGet } from './connectionApi';

export const unsetAuthorizationToken = () => {
  localStorage.removeItem(AUTHORIZATION_KEY);
};

export const setAuthorizationteToken = (token: string) => {
  if (token) {
    localStorage.setItem(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => {
  return localStorage.getItem(AUTHORIZATION_KEY);
};

export const verifyLoggedIn = async (setUser: (user: UserType) => void, user?: UserType) => {
  const token = getAuthorizationToken();
  if (!token) {
    location.href = '/login';
  }
  if (!user) {
    await connectionAPIGet<UserType>(URL_USER)
      .then((userReturn) => {
        setUser(userReturn);
      })
      .catch(() => {
        unsetAuthorizationToken();
        location.href = '/login';
      });
  }
  return null;
};
