import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const navbar = (
  <nav>
     <h1>Bistro 3way</h1>
     <ul>
      <li>Valor</li>
      <li>Quem Somos</li>
      <li>Contato</li>          
     </ul>
  </nav>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {navbar}
  </React.StrictMode>
);
