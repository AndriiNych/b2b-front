import * as React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="b2b-front"> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
