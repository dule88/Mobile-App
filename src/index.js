import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </ProductsProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
