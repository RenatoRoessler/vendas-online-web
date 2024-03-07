import { useState } from 'react';

import { connectionAPIGet, connectionAPIPost } from '../../functions/connection/connectionApi';
import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

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

  return {
    loading,
    getRequest,
    postRequest,
  };
};
