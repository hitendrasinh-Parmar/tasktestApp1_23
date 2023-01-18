import React, { useContext, useState } from 'react';

export type AppContextProps = {
  products: Array<any>;
  setProducts?: (value: any) => void;
};

const AppContext = React.createContext<AppContextProps>({});

type AppProviderProps = {
  children?: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [products, setProducts] = useState([1, 2, 3]);

  return (
    <AppContext.Provider value={{ products, setProducts }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
