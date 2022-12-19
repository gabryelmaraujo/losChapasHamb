import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/UserContext';
import { ProductsProvider } from './contexts/ProductsContext';
import { CartContext, CartProvider } from './contexts/CartContext';

 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <BrowserRouter>
          <CartProvider>
            <App />
          </CartProvider>
        </BrowserRouter>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
