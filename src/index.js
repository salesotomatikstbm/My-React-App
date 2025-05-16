import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App_Route from './App_Route';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App_Route />
  </React.StrictMode>
);

