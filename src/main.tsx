import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';

import { ThemeConnector } from './lib';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeConnector>
    <App />
  </ThemeConnector>
)
