import { createContext, useContext, useState } from 'react';

type NotificationType = 'success' | 'info' | 'error' | 'warning';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
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
  const [globalData, setGlobalData] = useState<GlobalData>({ accessToken: 'dasfadsfas' });
  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const setAccessToken = (accessToken: string) => {
    setGlobalData({ ...globalData, accessToken });
  };

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

  const { globalData, setGlobalData } = useContext(GlobalContext);
  return {
    accessToken: globalData?.accessToken,
    setAccessToken,
    notification: globalData?.notification,
    setNotification,
  };
};
