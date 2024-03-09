import { createContext, useContext, useState } from 'react';

import { UserType } from '../../modules/login/types/UserType';

type NotificationType = 'success' | 'info' | 'error' | 'warning';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  notification?: NotificationProps;
  user?: UserType;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };

  const setUser = (user: UserType) => {
    setGlobalData({
      ...globalData,
      user,
    });
  };

  const { globalData, setGlobalData } = useContext(GlobalContext);
  return {
    notification: globalData?.notification,
    user: globalData?.user,
    setNotification,
    setUser,
  };
};
