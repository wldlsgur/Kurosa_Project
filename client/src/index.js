import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
} else {
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}
