import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculadora from './pages/Calculadora';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>,
);
