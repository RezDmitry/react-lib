import React, { createContext, Dispatch, FC, PropsWithChildren, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, Theme } from '../../styles/theme';

export interface ThemeConnectorProps {
  theme?: Theme,
}

export const ThemeContext = createContext<null | Dispatch<React.SetStateAction<Theme>>>(null);

const ThemeConnector: FC<PropsWithChildren<ThemeConnectorProps>> = ({children, theme}) => {
  const [defTheme, setDefTheme] = useState(lightTheme);
  return (
    <ThemeContext.Provider value={setDefTheme}>
      <ThemeProvider theme={theme ? theme : defTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeConnector;