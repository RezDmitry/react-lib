import { useContext } from 'react';
import { ThemeContext } from '../ThemeConnector/ThemeConnector';
import { darkTheme, lightTheme } from '../../styles/theme';


const useChangeTheme = (): [setTheme: (themeName: 'light' | 'dark') => void] => {
  const setDefTheme = useContext(ThemeContext);

  const setTheme = (themeName: 'light' | 'dark') => {
    setDefTheme && setDefTheme(themeName === 'light' ? lightTheme : darkTheme);
  }

  return [setTheme];
}

export default useChangeTheme;