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

  const postRequest = async (url: string, body: object) => {
    setLoading(true);
    return await connectionAPIPost(url, body)
      .then((result) => {
        setNotification('Usuário logado com sucesso', 'success');
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
