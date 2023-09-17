import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { DataProvider } from './components/DataProvider';

const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(
  <Router>
    <DataProvider>
      
      <App />
    </DataProvider>
    </Router>
);
