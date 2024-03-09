import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthType } from '../../modules/login/types/AuthType';
import { ProductRoutesEnum } from '../../modules/product/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errorStatus';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationteToken } from '../functions/connection/auth';
import { connectionAPIGet, connectionAPIPost } from '../functions/connection/connectionApi';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();
  const navigator = useNavigate();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await connectionAPIGet(url)
      .then((result) => {
        return result;
      })
      .catch(() => {
        alert('Usuário ou senha invalida');
      });
  };

  const postRequest = async <T>(url: string, body: object): Promise<T | undefined> => {
    setLoading(true);
    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        setNotification('Usuário logado com sucesso', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      })
      .finally(() => {
        setLoading(false);
      });

    return returnData;
  };

  const authRequest = async (body: object): Promise<void> => {
    setLoading(true);
    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setNotification('Entrando...', 'success');
        setAuthorizationteToken(result.accessToken);
        navigator(ProductRoutesEnum.PRODUCT);
      })
      .catch(() => {
        setNotification(ERROR_INVALID_PASSWORD, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    getRequest,
    postRequest,
    authRequest,
  };
};
