import { notification as notificationAntd } from 'antd';
import { useEffect } from 'react';

import { useGlobalContext } from './useGlobalContext';

export const useNotification = () => {
  const [api, contextHolder] = notificationAntd.useNotification();
  const { notification } = useGlobalContext();

  useEffect(() => {
    if (notification?.message && notification?.type) {
      api[notification?.type]({
        message: notification?.message,
        placement: 'bottomRight',
        description: notification.description,
      });
    }
  }, [notification]);

  return {
    api,
    contextHolder,
  };
};
