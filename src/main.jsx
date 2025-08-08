
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/cartContext";

/* Import your existing CSS - do NOT change names */
import "./style/navbar.css";
import "./style/hero.css";
import "./style/NewArrivals.css";
import "./style/NewAndPopular.css";
import "./style/browse.css";
import "./style/ProductCard.css";
import "./style/productpage.css";
import "./style/wishlistPage.css";
import "./style/bag.css";
import "./style/about.css";
import "./style/login.css";
import "./style/Footer.css";
import "./style/AccountPage.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter> {/* ✅ Wrap everything inside BrowserRouter */}
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </WishlistProvider>
  </BrowserRouter>

);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import { WishlistProvider } from './components/wishlistContext'; 

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//       <WishlistProvider>
//       <App />
//     </WishlistProvider>
//   </BrowserRouter>
// );









































// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
