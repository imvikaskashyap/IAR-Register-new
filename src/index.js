import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <Router>
    <App />
  </Router>
);
