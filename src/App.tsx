import React from 'react';
import styled from 'styled-components';

import { Button, useChangeTheme } from './lib';

const StyledApp = styled.div`
  align-items: center;
  display: flex;
  gap: 0.6rem;
  height: 100vh;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`

const App = () => {
  const [setTheme] = useChangeTheme();
  return (
    <StyledApp>
      <Button
        color="primary"
      >
        Primary
      </Button>
      <Button
        color="success"
      >
        Success
      </Button>
      <Button
        color="warning"
      >
        Warning
      </Button>
      <Button
        color="danger"
      >
        Danger
      </Button>
      <Button
        disabled
      >
        Disabled
      </Button>
      <input type="checkbox" onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
    </StyledApp>
  );
};

export default App;