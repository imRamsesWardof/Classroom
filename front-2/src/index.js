import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import IndexRoutes from './routes/index.routes.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndexRoutes/>
  </React.StrictMode>
);

