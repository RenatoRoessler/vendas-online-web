import { AUTHORIZATION_KEY } from '../../constants/authorizationConstantes';

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
