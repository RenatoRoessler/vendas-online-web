import { createContext, useContext, useState } from 'react';

import { ProductType } from '../../modules/product/type/ProductType';

interface DataContext {
  products?: ProductType[];
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataContext = createContext({} as DataContextProps);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContext>({});

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setProducts = (products: ProductType[]) => {
    setData({
      ...data,
      products,
    });
  };

  return {
    products: data?.products || [],
    setProducts,
  };
};
