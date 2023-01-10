import React, { useContext, useState } from 'react';
import { darkTheme, lightTheme } from './colors';
import { themeType, ColorsInterface } from '../types/global';

const initialState = {
  theme: lightTheme,
  toggleTheme: () => { },
};

export const ThemeContext = React.createContext<themeType>(initialState);

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ColorsInterface>(lightTheme);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
