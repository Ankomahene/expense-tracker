import { createContext, ReactNode, useState } from 'react';
import { IThemeContext, Theme } from '../model';
import { setCssTheme } from '../helpers';

export const ThemeContext = createContext<IThemeContext>(null as any);

interface IThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: IThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setCssTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
